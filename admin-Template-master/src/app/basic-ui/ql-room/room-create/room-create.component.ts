import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {CinemaModel} from 'src/app/model/Cinema';
import {CinemaServiceService} from 'src/app/service/cinema-service.service';
import {startWith, map} from 'rxjs/operators';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {RoomService} from 'src/app/service/room.service';
import {EventManagement} from 'src/app/service/event.management';
import {ValidatorUtils} from '../../ql-film-schedule/validator.utils';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss']
})
export class RoomCreateComponent implements OnInit {
  cinemas: CinemaModel[] = [];
  form: FormGroup;
  isUpdate: any = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private roomService: RoomService,
    private eventManagement: EventManagement,
    private cinemaService: CinemaServiceService
  ) {
  }

  ngOnInit() {
    this.loadCinema();
    this.eventManagement.subscribe('UPDATE_CINEMA', () => this.loadCinema());

    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      cinema: ['',Validators.required ],
      character: ['', Validators.minLength(6)],
    });
    this.route.data.subscribe(({room}) => {

      this.isUpdate = room && room.id !== undefined;

      if (this.isUpdate) {
        this.form.patchValue({
          id: room.id,
          name: room.name,
          cinema: room.cinema.id,
          character: room.character,
        });


      }
    });
  }

  loadCinema() {
    this.cinemaService.fetch().subscribe(cinemas => {
      this.cinemas = cinemas;

    }, error => console.log(error));
  }

  doSubmit() {
    const room = this.form.value;
    console.log(room);
    if (this.isUpdate) {

      this.roomService.update(room).subscribe(
        () => this.router.navigateByUrl('/basic-ui/ql-room'),
        error => console.log(error));
    } else {
      this.roomService.create(room).subscribe(
        () => this.router.navigateByUrl('/basic-ui/ql-room'),
        error => console.log(error));
    }
  }


}
