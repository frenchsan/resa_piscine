import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getRoomList() {
      this.http.get(this.baseUrl + 'room/list').subscribe(data => console.log(data));
  }

  getAvailableReservation() {}
  doReservation() {}
}




