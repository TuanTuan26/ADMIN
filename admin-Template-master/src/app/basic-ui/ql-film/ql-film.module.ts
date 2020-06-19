import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



import { FilmRoutingModule } from './film-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilmCreateComponent } from './film-create/film-create.component';
import { FilmDeleteComponent } from './film-delete/film-delete.component';
import { FilmListComponent } from './film-list/film-list.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [FilmListComponent, FilmCreateComponent, FilmDeleteComponent],
  exports: [FilmCreateComponent],
  imports: [
    CommonModule,
    NgbModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatSelectModule,
    FilmRoutingModule,
    CKEditorModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  entryComponents: [ FilmDeleteComponent],
})
export class QlFilmModule { }
