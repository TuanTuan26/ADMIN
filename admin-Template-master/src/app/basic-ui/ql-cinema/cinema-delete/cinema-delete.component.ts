import { Component, OnInit } from '@angular/core';
import { CinemaModel } from './../../../model/Cinema';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CinemaServiceService } from './../../../service/cinema-service.service';
import { EventManagement } from 'src/app/service/event.management';

@Component({
  selector: 'app-cinema-delete',
  templateUrl: './cinema-delete.component.html',
  styleUrls: ['./cinema-delete.component.scss']
})
export class CinemaDeleteComponent implements OnInit {
  cinema: CinemaModel;
  constructor(
              public modal: NgbActiveModal,
              private cinemaService: CinemaServiceService,
              private eventManagement: EventManagement
  ) { }

  ngOnInit() {
  }
  delete() {
    this.cinemaService.delete(this.cinema.id).subscribe(
      () => {
        this.eventManagement.broadcast('UPDATE_CINEMA');
        this.modal.close();
      }, error => console.log(error)
    );
  }

}
