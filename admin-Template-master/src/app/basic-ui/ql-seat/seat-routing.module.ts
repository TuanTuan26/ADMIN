import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {Injectable, NgModule} from '@angular/core';
import {Observable} from 'rxjs';
import {SeatListComponent} from './seat-list/seat-list.component';
import {SeatModel} from '../../model/Seat';
import {SeatService} from '../../service/seat.service';
import {SeatCreateComponent} from './seat-create/seat-create.component';

@Injectable({providedIn: 'root'})
export class SeatResolver implements Resolve<SeatModel> {
  constructor(private seatService: SeatService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SeatModel>
    | Promise<SeatModel> | SeatModel {
    const id = route.params.id ? route.params.id : null;
    return this.seatService.findOne(id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: SeatListComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: SeatCreateComponent
  },
  {
    path: 'update/:id',
    component: SeatCreateComponent,
    resolve: {
      seat : SeatResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class SeatRoutingModule { }
