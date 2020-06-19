import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SeatModel} from '../model/Seat';
import {ENDPOINT_URL} from '../constants/app.constants';
import {TimeModel} from '../model/Time';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http: HttpClient) { }
  fetch(): Observable<TimeModel[]> {
    return this.http.get<TimeModel[]>(`${ENDPOINT_URL}/time`);
  }
}
