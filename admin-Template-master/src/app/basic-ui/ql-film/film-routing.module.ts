import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {Injectable, NgModule} from '@angular/core';
import {Observable} from 'rxjs';
import { FilmModel } from 'src/app/model/Film';
import { FilmService } from 'src/app/service/film.service';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmCreateComponent } from './film-create/film-create.component';


@Injectable({providedIn: 'root'})
export class FilmResolver implements Resolve<FilmModel> {
  constructor(private filmService: FilmService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FilmModel>
    | Promise<FilmModel> | FilmModel {
    const id = route.params.id ? route.params.id : null;
    return this.filmService.findOne(id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: FilmListComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: FilmCreateComponent
  },
  {
    path: 'update/:id',
    component: FilmCreateComponent,
    resolve: {
      film : FilmResolver
    }
  },
  // {
  //   path: 'detail/:id',
  //   component: ProductCreateComponent,
  //   resolve: {
  //     product: ProductResolver
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class FilmRoutingModule { }
