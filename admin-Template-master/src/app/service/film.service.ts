import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FilmModel } from '../model/Film';
import { Observable } from 'rxjs';
import { ENDPOINT_URL } from '../constants/app.constants';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }
  fetch(): Observable<FilmModel[]> {
    return this.http.get<FilmModel[]>(`${ENDPOINT_URL}/film`);
  }

  findOne(id: any): Observable<FilmModel> {
    return this.http.get<FilmModel>(`${ENDPOINT_URL}/film/${id}`);
  }

  create(film: FilmModel): Observable<FilmModel> {
    return this.http.post<FilmModel>(`${ENDPOINT_URL}/film`, film);
  }

  update(film: FilmModel) {
    return this.http.put(`${ENDPOINT_URL}/film`, film);
  }

  delete(id: number) {
    return this.http.delete(`${ENDPOINT_URL}/film/${id}`);

  }
}
