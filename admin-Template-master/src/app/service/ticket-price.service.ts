import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ENDPOINT_URL} from '../constants/app.constants';
import {TicketPriceModel} from '../model/TicketPrice';


@Injectable({
  providedIn: 'root'
})
export class TicketPriceService {

  constructor(private http: HttpClient) { }
  fetch(): Observable<TicketPriceModel[]> {
    return this.http.get<TicketPriceModel[]>(`${ENDPOINT_URL}/ticket-price`);
  }
}
