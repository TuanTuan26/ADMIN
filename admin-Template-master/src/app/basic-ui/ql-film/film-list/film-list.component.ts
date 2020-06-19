import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { FilmModel } from 'src/app/model/Film';
import { FilmService } from 'src/app/service/film.service';
import { EventManagement } from 'src/app/service/event.management';
import { UploadFileService } from './../../../service/upload-file.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilmDeleteComponent } from '../film-delete/film-delete.component';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  films: FilmModel[] = [];
  totalRecords: Number;
  page: Number = 1;
  searchText;
  image: string;

  constructor(
    private filmService: FilmService,
    private fileUploadService: UploadFileService,
    private eventManagement: EventManagement,
    public modal: NgbModal
  ) { }

  ngOnInit() {

    this.loadFilm();

    this.eventManagement.subscribe('UPDATE_FILM', () => this.loadFilm());

    this.totalRecords = this.films.length;

  }

  loadFilm() {
    this.filmService.fetch().subscribe(films => {
      this.films = films;

    }, error => console.log(error));
  }
  goToDelete(film: FilmModel) {
    const modalRef = this.modal.open(FilmDeleteComponent);
    modalRef.componentInstance.film = film;
  }
  public orderBy( key , dir) {
    this.films = _.orderBy(this.films, key , dir);
  }



}
