import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SeatService} from '../../../service/seat.service';
import {RoomModel} from '../../../model/Room';
import {RoomService} from '../../../service/room.service';

@Component({
  selector: 'app-seat-create',
  templateUrl: './seat-create.component.html',
  styleUrls: ['./seat-create.component.scss']
})
export class SeatCreateComponent implements OnInit {
  rooms: RoomModel[] =[];
  form: FormGroup;
  isUpdate: any = false;
  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private seatService :SeatService,
              private roomService: RoomService,
              ) {

  }

  ngOnInit() {
    this.loadRoom()
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      type: ['', Validators.required],
      room: ['', Validators.required],
      status: ['', Validators.required],
    });
    this.route.data.subscribe(({seat}) => {
      this.isUpdate = seat && seat.id !== undefined;

      if (this.isUpdate) {
        this.form.patchValue({
          id: seat.id,
          name: seat.name,
          type: seat.type,
          room: seat.room.id,
          status: seat.status,
        });
      }
    });
  }
  loadRoom() {
    this.roomService.fetch().subscribe(rooms=> {
      this.rooms = rooms;

    }, error => console.log(error));
  }
  doSubmit() {
    const seat = this.form.value;
    console.log(seat)
    if (this.isUpdate) {
      this.seatService.update(seat).subscribe(

        () => this.router.navigateByUrl('/basic-ui/ql-seat'),
        error => console.log(error));
    } else {
      this.seatService.create(seat).subscribe(
        () => this.router.navigateByUrl('/basic-ui/ql-seat'),
        error => console.log(error));
    }
  }
}
