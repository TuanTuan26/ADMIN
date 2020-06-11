import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CinemaCreateComponent } from './cinema-create/cinema-create.component';
import { CinemaDeleteComponent } from './cinema-delete/cinema-delete.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';

import { CinemaRoutingModule } from './cinema-routing.module';



@NgModule({
  declarations: [CinemaCreateComponent, CinemaListComponent, CinemaDeleteComponent],
  exports: [CinemaCreateComponent],
  imports: [
    CommonModule,
    CinemaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QlCinemalModule { }
