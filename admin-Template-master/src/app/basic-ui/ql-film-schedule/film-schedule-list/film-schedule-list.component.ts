import { Component, OnInit } from '@angular/core';
import {SeatModel} from '../../../model/Seat';
import {FilmSchedule} from '../../../model/FilmSchedule';
import {EventManagement} from '../../../service/event.management';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FilmScheduleService} from '../../../service/film-schedule.service';
import * as _ from 'lodash';
import {FilmScheduleDeleteComponent} from '../film-schedule-delete/film-schedule-delete.component';

@Component({
  selector: 'app-film-schedule-list',
  templateUrl: './film-schedule-list.component.html',
  styleUrls: ['./film-schedule-list.component.scss']
})
export class FilmScheduleListComponent implements OnInit {
  filmSchedules: FilmSchedule[] = [];
  totalRecords: Number;
  page: Number = 1;
  searchText;
  constructor(
    private filmScheduleService :FilmScheduleService,
    private eventManagement: EventManagement,
    public modal: NgbModal
  ) { }

  ngOnInit() {
    this.loadFilmSchedule();
    this.eventManagement.subscribe('UPDATE_FILMSCHEDULE', () => this.loadFilmSchedule());
    this.totalRecords = this.filmSchedules.length;
  }
  loadFilmSchedule() {
    this.filmScheduleService.fetch().subscribe(filmschedules => {
      this.filmSchedules = filmschedules;
    }, error => console.log(error));
  }
  goToDelete(filmSchedule: FilmSchedule) {
    const modalRef = this.modal.open(FilmScheduleDeleteComponent);
    modalRef.componentInstance.filmSchedule = filmSchedule;
    console.log(modalRef.componentInstance.filmSchedule)
  }
  public orderBy( key , dir) {
    this.filmSchedules = _.orderBy(this.filmSchedules, key , dir);
  }
}
