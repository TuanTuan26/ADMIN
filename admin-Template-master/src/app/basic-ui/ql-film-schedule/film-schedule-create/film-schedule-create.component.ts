import {Component, OnInit} from '@angular/core';
import {RoomModel} from '../../../model/Room';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomService} from '../../../service/room.service';
import {FilmScheduleService} from '../../../service/film-schedule.service';
import {FilmService} from '../../../service/film.service';
import {FilmModel} from '../../../model/Film';
import {TimeModel} from '../../../model/Time';
import {TicketPriceModel} from '../../../model/TicketPrice';
import {TimeService} from '../../../service/time.service';
import {TicketPriceService} from '../../../service/ticket-price.service';
import {ValidatorUtils} from '../validator.utils';

@Component({
  selector: 'app-film-schedule-create',
  templateUrl: './film-schedule-create.component.html',
  styleUrls: ['./film-schedule-create.component.scss']
})
export class FilmScheduleCreateComponent implements OnInit {
  rooms: RoomModel[] = [];
  films: FilmModel[] = [];
  times: TimeModel[] = [];
  ticketPrices: TicketPriceModel[] = [];
  form: FormGroup;
  isUpdate: any = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private roomService: RoomService,
    private filmScheduleService : FilmScheduleService,
    private filmService :FilmService,
    private  timeService:TimeService,
    private ticketPriceService:TicketPriceService
  ) {
  }

  ngOnInit() {
    this.loadRoom()
    this.loadFilm()

    this.loadTime()
    this.loadTicketPrice()
    this.form = this.fb.group({
      id: [''],
      time: ['',  ValidatorUtils.required,
        ValidatorUtils.minLength(3),
        ValidatorUtils.maxLength(10)],
      room: ['', Validators.required],
      film: ['', Validators.required],
      ticketPrice: ['', Validators.required],
      day: ['',Validators.required],
    });
    console.log(this.route.data)
    this.route.data.subscribe(({filmSchedule}) => {
      console.log(filmSchedule)
      this.isUpdate = filmSchedule && filmSchedule.id !== undefined;

      if (this.isUpdate) {
        this.form.patchValue({
          id: filmSchedule.id,
          time: filmSchedule.time.id,
          room: filmSchedule.room.id,
          film: filmSchedule.film.id,
          ticketPrice: filmSchedule.ticketPrice.id,
          day: filmSchedule.day,
        });
      }
    });
  }
  loadRoom() {
    this.roomService.fetch().subscribe(rooms=> {
      this.rooms = rooms;

    }, error => console.log(error));
  }
  loadFilm(){
    this.filmService.fetch().subscribe(films=>
    {
      this.films= films;
    })
  }
  loadTime(){
    this.timeService.fetch().subscribe(times=>{
      this.times = times;
    })
  }
  loadTicketPrice(){
    this.ticketPriceService.fetch().subscribe(ticketPrices=>{
      this.ticketPrices = ticketPrices;
    })
  }

  doSubmit() {
    const filmSchedule = this.form.value;
    if (this.isUpdate) {
      this.filmScheduleService.update(filmSchedule).subscribe(

        () => this.router.navigateByUrl('/basic-ui/ql-filmSchedule'),
        error => console.log(error));
    } else {
      this.filmScheduleService.create(filmSchedule).subscribe(
        () => this.router.navigateByUrl('/basic-ui/ql-filmSchedule'),
        error => console.log(error));
    }
  }



}
