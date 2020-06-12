import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoomModel } from '../model/Room';
import { ENDPOINT_URL } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }
  fetch(): Observable<RoomModel[]> {
    return this.http.get<RoomModel[]>(`${ENDPOINT_URL}/room`);
  }

  findOne(id: any): Observable<RoomModel> {
    return this.http.get<RoomModel>(`${ENDPOINT_URL}/room/${id}`);
  }

  create(id: any, room: RoomModel): Observable<RoomModel> {
    return this.http.post<RoomModel>(`${ENDPOINT_URL}/room/${id}`, room);
  }

  update(id: any, room: RoomModel) {
    return this.http.put(`${ENDPOINT_URL}/room/${id}`, room);
  }

  delete(id: number) {
    return this.http.delete(`${ENDPOINT_URL}/room/${id}`);
  }
}
