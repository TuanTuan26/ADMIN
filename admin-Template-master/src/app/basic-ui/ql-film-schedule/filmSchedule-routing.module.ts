import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {Injectable, NgModule} from '@angular/core';
import {Observable} from 'rxjs';

import {FilmSchedule} from '../../model/FilmSchedule';
import {FilmScheduleService} from '../../service/film-schedule.service';
import {FilmScheduleListComponent} from './film-schedule-list/film-schedule-list.component';
import {FilmScheduleCreateComponent} from './film-schedule-create/film-schedule-create.component';

@Injectable({providedIn: 'root'})
export class filmScheduleResolver implements Resolve<FilmSchedule> {
  constructor(private filmScheduleService: FilmScheduleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FilmSchedule>
    | Promise<FilmSchedule> | FilmSchedule {
    const id = route.params.id ? route.params.id : null;
    return this.filmScheduleService.findOne(id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: FilmScheduleListComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: FilmScheduleCreateComponent
  },
  {
    path: 'update/:id',
    component: FilmScheduleCreateComponent,
    resolve: {
      filmSchedule : filmScheduleResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class FilmScheduleRoutingModule { }
