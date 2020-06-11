import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CinemaCreateComponent } from './cinema-create/cinema-create.component';
import { CinemaDeleteComponent } from './cinema-delete/cinema-delete.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';




const routes: Routes = [
  { path: '', component: CinemaListComponent },
  { path: 'create', component: CinemaCreateComponent },
  { path: 'update/:id', component: CinemaDeleteComponent },


];

@NgModule({
  declarations: [ CinemaCreateComponent, CinemaDeleteComponent, CinemaListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(routes),
  ]
})
export class QlCinemalModule { }
