import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FilmService } from 'src/app/service/film.service';
import { EventManagement } from 'src/app/service/event.management';
import { FilmModel } from 'src/app/model/Film';

@Component({
  selector: 'app-film-delete',
  templateUrl: './film-delete.component.html',
  styleUrls: ['./film-delete.component.scss']
})
export class FilmDeleteComponent implements OnInit {
  film: FilmModel;
  constructor(
    public modal: NgbActiveModal,
    private filmService: FilmService,
    private eventManagement: EventManagement
  ) { }

  ngOnInit() {
  }
  delete() {
    this.filmService.delete(this.film.id).subscribe(
      () => {
        this.eventManagement.broadcast('UPDATE_FILM');
        this.modal.close();
      }, error => console.log(error)
    );
  }
}
