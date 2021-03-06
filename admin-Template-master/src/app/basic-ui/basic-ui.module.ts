import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccordionsComponent } from './accordions/accordions.component';



const routes: Routes = [
  { path: 'accordions', component: AccordionsComponent },
  { path: 'ql-category', loadChildren: () => import('./ql-category/ql-category.module').then(m => m.QlCategoryModule) },

  { path: 'ql-film', loadChildren: () => import('./ql-film/ql-film.module').then(m => m.QlFilmModule ) },
  { path: 'ql-seat',loadChildren: () => import('./ql-seat/ql-seat.module').then(m => m.QlSeatModule )},
  { path: 'ql-room', loadChildren: () => import('./ql-room/ql-room.module').then(m => m.QlRoomModule) },
  { path: 'ql-cinema', loadChildren: () => import('./ql-cinema/ql-cinema.module').then(m => m.QlCinemalModule) },
  { path: 'ql-filmSchedule', loadChildren: () => import('./ql-film-schedule/ql-filmSchedule.module').then(m => m.QlFilmScheduleModule) },



];

@NgModule({
  declarations: [AccordionsComponent],
  imports: [

  CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
  ]
})
export class BasicUiModule { }
