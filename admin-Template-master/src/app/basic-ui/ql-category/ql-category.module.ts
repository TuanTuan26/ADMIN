import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
  declarations: [CategoryListComponent, CategoryDeleteComponent],
  exports: [CategoryListComponent],
  imports: [
    CommonModule,
    NgbModule,
    NgxPaginationModule,
    CategoryRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  entryComponents: [ CategoryDeleteComponent],
})
export class QlCategoryModule { }
