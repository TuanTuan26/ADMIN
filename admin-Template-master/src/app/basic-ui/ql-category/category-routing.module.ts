import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {Injectable, NgModule} from '@angular/core';
import {Observable} from 'rxjs';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryModel } from 'src/app/model/Category';
import { CategoryService } from 'src/app/service/category.service';


@Injectable({providedIn: 'root'})
export class CategoryResolver implements Resolve<CategoryModel> {
  constructor(private categoryService: CategoryService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CategoryModel>
    | Promise<CategoryModel> | CategoryModel {
    const id = route.params.id ? route.params.id : null;
    return this.categoryService.findOne(id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CategoryListComponent
  },
  {
    path: 'update/:id',
    component: CategoryListComponent,
    resolve: {
      category : CategoryResolver
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
export class CategoryRoutingModule { }

