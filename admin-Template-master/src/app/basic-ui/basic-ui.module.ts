import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccordionsComponent } from './accordions/accordions.component';
import { FilmCreateComponent } from './ql-film/film-create/film-create.component';
import { FilmListComponent } from './ql-film/film-list/film-list.component';
import { FilmDeleteComponent } from './ql-film/film-delete/film-delete.component';


const routes: Routes = [
  { path: 'accordions', component: AccordionsComponent },
  { path: 'ql-category', loadChildren: () => import('./ql-category/ql-category.module').then(m => m.QlCategoryModule) },
  { path: 'ql-film', loadChildren: () => import('./ql-film/ql-film.module').then(m => m.QlFilmModule ) },
  { path: 'ql-seat',loadChildren: () => import('./ql-seat/ql-seat.module').then(m => m.QlSeatModule )},
  { path: 'ql-room', loadChildren: () => import('./ql-room/ql-room.module').then(m => m.QlRoomModule) },
  { path: 'ql-cinema', loadChildren: () => import('./ql-cinema/ql-cinema.module').then(m => m.QlCinemalModule) },



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
