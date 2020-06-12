import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/model/Category';
import { CategoryService } from 'src/app/service/category.service';
import { EventManagement } from 'src/app/service/event.management';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryDeleteComponent } from '../category-delete/category-delete.component';
import * as _ from 'lodash';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: CategoryModel[] = [];
  totalRecords: Number;
  page: Number = 1;
  isChoose: any = false;
  form: FormGroup;
  isUpdate: any = false;
  searchText;
  constructor(
    private categoryService: CategoryService,
    private eventManagement: EventManagement,
    public modal: NgbModal,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadCategory();
    this.eventManagement.subscribe('UPDATE_CATEGORY', () => this.loadCategory());
    this.totalRecords = this.categories.length;
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
    });
    this.route.data.subscribe(({category}) => {

      this.isUpdate = category && category.id !== undefined;
      if (this.isUpdate) {
        this.form.patchValue({
          id: category.id,
          name: category.name,
        });

      }
    });

  }

  doSubmit() {
    const category = this.form.value;
    if (this.isUpdate) {
      this.isChoose = false;
      this.categoryService.update(category).subscribe(
        () => this.router.navigateByUrl('/basic-ui/ql-category'),
        error => console.log(error));
      this.isUpdate = false;
    } else {
      this.isChoose = false;
      this.categoryService.create(category).subscribe(
        () => this.router.navigateByUrl('/basic-ui/ql-category'),
        error => console.log(error));
      window.location.reload();
    }
  }


  loadCategory() {
    this.categoryService.fetch().subscribe(categories => {
      this.categories = categories;
      console.log(this.categories);

    }, error => console.log(error));
  }
  goToDelete(category: CategoryModel) {
    const modalRef = this.modal.open(CategoryDeleteComponent);
    modalRef.componentInstance.category = category;
  }
  public orderBy( key , dir) {
    this.categories = _.orderBy(this.categories, key , dir);
  }
  openForm() {
    this.isChoose = true;
  }
  closeForm() {
    this.router.navigateByUrl('/basic-ui/ql-category');
    this.isChoose = false;

  }

}
