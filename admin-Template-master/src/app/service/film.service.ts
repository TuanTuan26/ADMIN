import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ENDPOINT_URL} from '../constants/app.constants';
import {FilmModel} from '../model/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }
  fetch(): Observable<FilmModel[]> {
    return this.http.get<FilmModel[]>(`${ENDPOINT_URL}/films`);
  }

  findOne(id: any): Observable<FilmModel> {
    return this.http.get<FilmModel>(`${ENDPOINT_URL}/films/${id}`);
  }
  delete(id: number) {
    return this.http.delete(`${ENDPOINT_URL}/films/${id}`);
  }
  create(id: any, filmModel: FilmModel): Observable<FilmModel> {
    return this.http.post<FilmModel>(`${ENDPOINT_URL}/films/${id}`, filmModel);
  }

  update(id: any, filmModel: FilmModel) {
    return this.http.put(`${ENDPOINT_URL}/films/${id}`, filmModel);
  }
}
