import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CinemaModel} from '../model/Cinema';
import {ENDPOINT_URL} from '../constants/app.constants';
import {HttpClient} from '@angular/common/http';
import {SeatModel} from '../model/Seat';
import {RoomModel} from '../model/Room';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  constructor(private http: HttpClient) { }
  fetch(): Observable<SeatModel[]> {
    return this.http.get<SeatModel[]>(`${ENDPOINT_URL}/seat`);
  }

  findOne(id: any): Observable<SeatModel> {
    return this.http.get<SeatModel>(`${ENDPOINT_URL}/seat/${id}`);
  }
  delete(id: number) {
    return this.http.delete(`${ENDPOINT_URL}/seat/${id}`);
  }
  create(id: any, seat: SeatModel): Observable<SeatModel> {
    return this.http.post<SeatModel>(`${ENDPOINT_URL}/seat/${id}`, seat);
  }

  update(id: any, seat: SeatModel) {
    return this.http.put(`${ENDPOINT_URL}/seat/${id}`, seat);
  }

}
