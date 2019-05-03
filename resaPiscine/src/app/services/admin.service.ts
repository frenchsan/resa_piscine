import { Injectable, EventEmitter } from '@angular/core';
import { Availability, SessionOuverteRoot, SessionOuverte } from '../shared/models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {


  baseUrl = environment.baseUrl;
  availabilityList: SessionOuverte[];
  availabilityListEmitter = new EventEmitter<SessionOuverte[]>();
  constructor(private http: HttpClient) { }

  createAvailability( availability: Availability) {
    const body = availability;
    this.http.post(this.baseUrl + 'staff/availability/create', body).subscribe(data => {
      this.getavailabilityList();
    });
  }

  getavailabilityList() {
    const body = {
    startDateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
    endDateTime: '2020-05-02 16:19:39'
  };
    this.http.post<SessionOuverteRoot>(this.baseUrl + 'staff/availability/list', body).subscribe(data => {
      this.availabilityList = data.message;
      this.availabilityListEmitter.emit(data.message);
      console.log(this.availabilityList);
    });

  }
}
