import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccordionsComponent } from './accordions/accordions.component';
import { QlCategoryComponent } from './ql-category/ql-category.component';
import { QlFilmComponent } from './ql-film/ql-film.component';
import { QlSeatComponent } from './ql-seat/ql-seat.component';


const routes: Routes = [
  { path: 'accordions', component: AccordionsComponent },
  { path: 'ql-category', component: QlCategoryComponent },
  { path: 'ql-film', component: QlFilmComponent },
  { path: 'ql-seat', component: QlSeatComponent },
  { path: 'ql-room', loadChildren: () => import('./ql-room/ql-room.module').then(m => m.QlRoomModule) },
  { path: 'ql-cinema', loadChildren: () => import('./ql-cinema/ql-cinema.module').then(m => m.QlCinemalModule) },



];

@NgModule({
  declarations: [AccordionsComponent, QlCategoryComponent, QlFilmComponent, QlSeatComponent ],
  imports: [

  CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
  ]
})
export class BasicUiModule { }
