import { Component, OnInit } from '@angular/core';
import { RoomModel } from 'src/app/model/Room';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventManagement } from 'src/app/service/event.management';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-room-delete',
  templateUrl: './room-delete.component.html',
  styleUrls: ['./room-delete.component.scss']
})
export class RoomDeleteComponent implements OnInit {
  room: RoomModel;
  constructor(
    public modal: NgbActiveModal,
    private roomService: RoomService,
    private eventManagement: EventManagement
  ) { }

  ngOnInit() {
  }

  delete() {
    this.roomService.delete(this.room.id).subscribe(
      () => {
        this.eventManagement.broadcast('UPDATE_ROOM');
        this.modal.close();
      }, error => console.log(error)
    );
  }

}
