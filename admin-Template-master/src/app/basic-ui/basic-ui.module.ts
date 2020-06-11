import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccordionsComponent } from './accordions/accordions.component';
import { QlCategoryComponent } from './ql-category/ql-category.component';
import { QlFilmComponent } from './ql-film/ql-film.component';
import { QlCinemaComponent } from './ql-cinema/ql-cinema.component';
import { QlRoomComponent } from './ql-room/ql-room.component';
import { QlSeatComponent } from './ql-seat/ql-seat.component';


const routes: Routes = [
  { path: 'accordions', component: AccordionsComponent },
  { path: 'ql-category', component: QlCategoryComponent },
  { path: 'ql-film', component: QlFilmComponent },
  { path: 'ql-cinema', component: QlCinemaComponent },
  { path: 'ql-room', component: QlRoomComponent },
  { path: 'ql-seat', component: QlSeatComponent },

];

@NgModule({
  declarations: [AccordionsComponent, QlCategoryComponent, QlFilmComponent, QlCinemaComponent, QlRoomComponent, QlSeatComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
  ]
})
export class BasicUiModule { }
