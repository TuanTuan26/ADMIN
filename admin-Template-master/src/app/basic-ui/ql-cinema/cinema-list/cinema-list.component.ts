import { Component, OnInit } from '@angular/core';
import { CinemaModel } from 'src/app/model/Cinema';
import { CinemaServiceService } from 'src/app/service/cinema-service.service';
import { EventManagement } from 'src/app/service/event.management';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CinemaDeleteComponent } from '../cinema-delete/cinema-delete.component';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.scss']
})
export class CinemaListComponent implements OnInit {

  cinemas: CinemaModel[] = [];
  constructor(
    private cinemaService: CinemaServiceService,
    private eventManagement: EventManagement,
    public modal: NgbModal
  ) { }

  ngOnInit() {
    this.loadCinema();
    this.eventManagement.subscribe('UPDATE_CINEMA', () => this.loadCinema());
  }

  loadCinema() {
    this.cinemaService.fetch().subscribe(cinemas => {
      this.cinemas = cinemas;
    }, error => console.log(error));
  }
  goToDelete(product: CinemaModel) {
    const modalRef = this.modal.open(CinemaDeleteComponent);
    modalRef.componentInstance.product = product;
  }


}
