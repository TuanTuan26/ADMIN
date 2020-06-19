import { Component, OnInit } from '@angular/core';
import {FilmSchedule} from '../../../model/FilmSchedule';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {EventManagement} from '../../../service/event.management';
import {FilmScheduleService} from '../../../service/film-schedule.service';

@Component({
  selector: 'app-film-schedule-delete',
  templateUrl: './film-schedule-delete.component.html',
  styleUrls: ['./film-schedule-delete.component.scss']
})
export class FilmScheduleDeleteComponent implements OnInit {
  filmSchedule :FilmSchedule;
  constructor(public modal: NgbActiveModal,
              private eventManagement: EventManagement,
              private filmScheduleService :FilmScheduleService) { }

  ngOnInit() {
  }
  delete() {
    console.log(this.filmSchedule.id)
    this.filmScheduleService.delete(this.filmSchedule.id).subscribe(
      () => {
        console.log(this.filmSchedule.id);
        this.eventManagement.broadcast('UPDATE_FILMSCHEDULE');
        this.modal.close();
      }, error => console.log(error)
    );
  }
}
