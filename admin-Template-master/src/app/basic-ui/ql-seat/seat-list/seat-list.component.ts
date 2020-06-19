import { Component, OnInit } from '@angular/core';

import {EventManagement} from '../../../service/event.management';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SeatService} from '../../../service/seat.service';
import * as _ from 'lodash';
import {SeatModel} from '../../../model/Seat';
import {SeatDeleteComponent} from '../seat-delete/seat-delete.component';

@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.scss']
})
export class SeatListComponent implements OnInit {
  seats: SeatModel[] = [];
  totalRecords: Number;
  page: Number = 1;
  searchText;

  constructor(
    private seatService: SeatService,
    private eventManagement: EventManagement,
    public modal: NgbModal
  ) { }
  ngOnInit() {

    this.loadSeat();
    this.eventManagement.subscribe('UPDATE_SEAT', () => this.loadSeat());

    this.totalRecords = this.seats.length;

  }

  loadSeat() {
    this.seatService.fetch().subscribe(seats => {
      this.seats = seats;
    }, error => console.log(error));
  }
  goToDelete(seat: SeatModel) {
    const modalRef = this.modal.open(SeatDeleteComponent);
    modalRef.componentInstance.seat = seat;
    console.log(modalRef.componentInstance.seat)
  }
  public orderBy( key , dir) {
    this.seats = _.orderBy(this.seats, key , dir);
  }


}
