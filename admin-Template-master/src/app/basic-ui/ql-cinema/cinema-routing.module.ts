import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {Injectable, NgModule} from '@angular/core';
import {Observable} from 'rxjs';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { CinemaCreateComponent } from './cinema-create/cinema-create.component';
import { CinemaServiceService } from 'src/app/service/cinema-service.service';
import { CinemaModel } from 'src/app/model/Cinema';

@Injectable({providedIn: 'root'})
export class CinemaResolver implements Resolve<CinemaModel> {
  constructor(private cinemaService: CinemaServiceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CinemaModel>
    | Promise<CinemaModel> | CinemaModel {
    const id = route.params.id ? route.params.id : null;
    return this.cinemaService.findOne(id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: CinemaListComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CinemaCreateComponent
  },
  {
    path: 'update/:id',
    component: CinemaCreateComponent,
    resolve: {
      cinema : CinemaResolver
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
export class CinemaRoutingModule { }
