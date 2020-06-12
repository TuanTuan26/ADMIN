import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';




import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {SeatRoutingModule} from './seat-routing.module';
import {SeatListComponent} from './seat-list/seat-list.component';
import { SeatCreateComponent } from './seat-create/seat-create.component';
import { SeatDeleteComponent } from './seat-delete/seat-delete.component';




@NgModule({
  declarations: [SeatListComponent, SeatCreateComponent, SeatDeleteComponent , ],
  exports: [SeatCreateComponent],
  imports: [
    CommonModule,
    NgbModule,
    NgxPaginationModule,
    SeatRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  entryComponents: [SeatDeleteComponent ],
})
export class QlSeatModule { }
