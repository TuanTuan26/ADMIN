import { Component, OnInit } from '@angular/core';
import { CinemaModel } from 'src/app/model/Cinema';
import { CinemaServiceService } from 'src/app/service/cinema-service.service';
import { EventManagement } from 'src/app/service/event.management';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CinemaDeleteComponent } from '../cinema-delete/cinema-delete.component';
import * as _ from 'lodash';


@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.scss']
})
export class CinemaListComponent implements OnInit {
  cinemas: CinemaModel[] = [];
  totalRecords: Number;
  page: Number = 1;
  searchText;

  constructor(
    private cinemaService: CinemaServiceService,
    private eventManagement: EventManagement,
    public modal: NgbModal
  ) { }

  ngOnInit() {

    this.loadCinema();

    this.eventManagement.subscribe('UPDATE_CINEMA', () => this.loadCinema());

    this.totalRecords = this.cinemas.length;

  }

  loadCinema() {
    this.cinemaService.fetch().subscribe(cinemas => {
      this.cinemas = cinemas;

    }, error => console.log(error));
  }
  goToDelete(cinema: CinemaModel) {
    const modalRef = this.modal.open(CinemaDeleteComponent);
    modalRef.componentInstance.cinema = cinema;
  }
  public orderBy( key , dir) {
    this.cinemas = _.orderBy(this.cinemas, key , dir);
  }



}
