import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


import { CinemaCreateComponent } from './cinema-create/cinema-create.component';
import { CinemaDeleteComponent } from './cinema-delete/cinema-delete.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { CinemaRoutingModule } from './cinema-routing.module';
import { SearchPipe } from './cinema-list/search.pipe';




@NgModule({
  declarations: [CinemaCreateComponent, CinemaListComponent, CinemaDeleteComponent, SearchPipe],
  exports: [CinemaCreateComponent],
  imports: [
    CommonModule,
    NgbModule,
    NgxPaginationModule,
    CinemaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [ CinemaDeleteComponent],
})
export class QlCinemalModule { }
