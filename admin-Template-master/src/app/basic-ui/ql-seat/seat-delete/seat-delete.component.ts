import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {EventManagement} from '../../../service/event.management';
import {SeatModel} from '../../../model/Seat';
import {SeatService} from '../../../service/seat.service';

@Component({
  selector: 'app-seat-delete',
  templateUrl: './seat-delete.component.html',
  styleUrls: ['./seat-delete.component.scss']
})
export class SeatDeleteComponent implements OnInit {

  seat: SeatModel;
  constructor(
    public modal: NgbActiveModal,
    private seatService: SeatService,
    private eventManagement: EventManagement
  ) { }

  ngOnInit() {
  }
  delete() {
    console.log(this.seat.id)
    this.seatService.delete(this.seat.id).subscribe(
      () => {
        console.log(this.seat.id);
        this.eventManagement.broadcast('UPDATE_SEAT');
        this.modal.close();
      }, error => console.log(error)
    );
  }

}
