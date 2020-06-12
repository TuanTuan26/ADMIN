import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../model/Category';
import { ENDPOINT_URL } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  fetch(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(`${ENDPOINT_URL}/category`);
  }

  findOne(id: any): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(`${ENDPOINT_URL}/category/${id}`);
  }

  create(category: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>(`${ENDPOINT_URL}/category`, category);
  }

  update(category: CategoryModel) {
    return this.http.put(`${ENDPOINT_URL}/category`, category);
  }

  delete(id: number) {
    return this.http.delete(`${ENDPOINT_URL}/category/${id}`);
  }
}
