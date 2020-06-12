import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { RoomModel } from './../../../model/Room';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoomService } from 'src/app/service/room.service';
import { EventManagement } from 'src/app/service/event.management';
import { RoomDeleteComponent } from '../room-delete/room-delete.component';


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  rooms: RoomModel[] = [];

  totalRecords: Number;
  page: Number = 1;
  searchText;
  constructor(
    private roomService: RoomService,

    private eventManagement: EventManagement,
    public modal: NgbModal
  ) { }

  ngOnInit() {
    this.loadRoom();

    this.eventManagement.subscribe('UPDATE_ROOM', () => this.loadRoom());

    this.totalRecords = this.rooms.length;
  }

  loadRoom() {
    this.roomService.fetch().subscribe(rooms => {
      this.rooms = rooms;
    }, error => console.log(error));
  }

  goToDelete(room: RoomModel) {
    const modalRef = this.modal.open(RoomDeleteComponent);
    modalRef.componentInstance.room = room;
    console.log(room)
  }
  public orderBy( key , dir) {
    this.rooms = _.orderBy(this.rooms, key , dir);
  }


}
