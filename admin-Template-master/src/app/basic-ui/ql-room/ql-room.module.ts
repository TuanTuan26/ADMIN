import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RoomCreateComponent } from './room-create/room-create.component';
import { RoomDeleteComponent } from './room-delete/room-delete.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomRoutingModule } from './room-routing.module';




@NgModule({
  declarations: [RoomCreateComponent, RoomDeleteComponent, RoomListComponent],
  exports: [RoomCreateComponent],
  imports: [
   CommonModule,
    NgbModule,
    NgxPaginationModule,
    RoomRoutingModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  entryComponents: [ RoomDeleteComponent],
})
export class QlRoomModule { }
