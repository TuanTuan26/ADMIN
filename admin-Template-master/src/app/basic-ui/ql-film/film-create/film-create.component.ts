import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { UploadFileService } from 'src/app/service/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmService } from './../../../service/film.service';
import { CategoryModel } from 'src/app/model/Category';
import { CategoryService } from 'src/app/service/category.service';
import { EventManagement } from 'src/app/service/event.management';

@Component({
  selector: 'app-film-create',
  templateUrl: './film-create.component.html',
  styleUrls: ['./film-create.component.scss']
})
export class FilmCreateComponent implements OnInit {
  public Editor = ClassicEditor;
  selectedFiles: FileList;
  progressInfos = [];
  categories: CategoryModel[] = [];
  message = '';
  disabled = false;
  fileInfos: Observable<any>;
  form: FormGroup;
  isUpdate: any = false;
  isLoad: any = false;
  dropdownSettings = {};
  selectedItems = [];
  values = [];
  constructor(
    private uploadService: UploadFileService,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    private eventManagement: EventManagement,
    private route: ActivatedRoute,
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.loadCategory();
    this.eventManagement.subscribe('UPDATE_CATEGORY', () => this.loadCategory());

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };

    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      cast: ['', Validators.required],
      image: ['', Validators.required],
      yearProduce: ['', Validators.required],
      description: ['', Validators.required],
      trailer: ['', Validators.required],
      time: ['', Validators.required],
      language: ['', Validators.required],
      categories: ['', Validators.required],
    });

    this.route.data.subscribe(({film}) => {
      this.isUpdate = film && film.id !== undefined;

      if (this.isUpdate) {

        film.categories.map(e => {
            this.values.push(e.id);
            console.log(this.values);
        });
        this.form.patchValue({
          id: film.id,
          name: film.name,
          cast: film.cast,
          image: film.image,
          yearProduce: film.yearProduce,
          description: film.description,
          trailer: film.trailer,
          time: film.time,
          language: film.language,
          userName: film.userName,
          categories: this.values,
        });

      }
    });
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  loadCategory() {
    this.categoryService.fetch().subscribe(categories => {
      this.categories = categories;


    }, error => console.log(error));
  }

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();

}
selectFiles(event) {
  this.progressInfos = [];
  this.selectedFiles = event.target.files;
  this.form.controls.image.setValue(event.target.files[0].name);


}

upload(idx, file) {
  this.progressInfos[idx] = { value: 0, fileName: file.name };

  this.uploadService.upload(file).subscribe(
    event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
        this.isLoad = true;
      } else if (event instanceof HttpResponse) {
        this.fileInfos = this.uploadService.getFiles();
      }
    },
    err => {
      this.progressInfos[idx].value = 0;
      this.isLoad = false;
      this.message = 'Could not upload the file:' + file.name;
    });
  }
  uploadFiles() {
    this.message = '';
    for (let i = 0; i < this.selectedFiles.length; i++) {
    this.upload(i, this.selectedFiles[i]);

    }
  }
  doSubmit() {
    const film = this.form.value;
    console.log(film);
    if (this.isUpdate) {
      this.isLoad = true;
      this.filmService.update(film).subscribe(
        () => this.router.navigateByUrl('/basic-ui/ql-film'),
        error => console.log(error));
    } else {
      this.isLoad = false;
      this.filmService.create(film).subscribe(
        () => this.router.navigateByUrl('/basic-ui/ql-film'),
        error => console.log(error));
    }
  }


}
