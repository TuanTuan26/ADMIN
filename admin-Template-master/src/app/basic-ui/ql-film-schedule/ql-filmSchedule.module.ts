import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';




import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilmScheduleListComponent } from './film-schedule-list/film-schedule-list.component';
import {FilmScheduleRoutingModule} from './filmSchedule-routing.module';
import { FilmScheduleDeleteComponent } from './film-schedule-delete/film-schedule-delete.component';
import { FilmScheduleCreateComponent } from './film-schedule-create/film-schedule-create.component';
import {MatDatepickerModule, MatFormFieldModule} from '@angular/material';




@NgModule({
  declarations: [ FilmScheduleListComponent, FilmScheduleDeleteComponent, FilmScheduleCreateComponent, ],
  exports: [FilmScheduleCreateComponent],
  imports: [
    CommonModule,
    NgbModule,
    NgxPaginationModule,
    FilmScheduleRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  entryComponents: [ FilmScheduleDeleteComponent],
})
export class QlFilmScheduleModule { }
