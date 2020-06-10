import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccordionsComponent } from './accordions/accordions.component';


const routes: Routes = [
  { path: 'accordions', component: AccordionsComponent },

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
