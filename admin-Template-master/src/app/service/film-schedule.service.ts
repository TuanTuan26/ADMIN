import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ENDPOINT_URL} from '../constants/app.constants';
import {FilmSchedule} from '../model/FilmSchedule';

@Injectable({
  providedIn: 'root'
})
export class FilmScheduleService {
  constructor(private http: HttpClient) { }
  fetch(): Observable<FilmSchedule[]> {
    return this.http.get<FilmSchedule[]>(`${ENDPOINT_URL}/film`);
  }

  findOne(id: any): Observable<FilmSchedule> {
    return this.http.get<FilmSchedule>(`${ENDPOINT_URL}/film/${id}`);
  }
  delete(id: number) {
    return this.http.delete(`${ENDPOINT_URL}/film/${id}`);
  }
  create( filmSchedule: FilmSchedule): Observable<FilmSchedule> {
    return this.http.post<FilmSchedule>(`${ENDPOINT_URL}/film`, filmSchedule);
  }

  update( filmSchedule: FilmSchedule) {
    return this.http.put(`${ENDPOINT_URL}/film`, filmSchedule);
  }
}
