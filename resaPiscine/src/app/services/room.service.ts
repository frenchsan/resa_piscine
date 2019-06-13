import { environment } from '../../environments/environment';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Plannning, RootPlanning } from '../shared/models';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  planning = new EventEmitter<Plannning[]>();
  ListedesDatesDispo = new EventEmitter <any>();
  AvailabilityForaDay = new EventEmitter<Plannning[]>();
  result: Plannning[];
  ArrayDataSource = new Array();

  getRoomList() {
      this.http.get(this.baseUrl + 'room/list').subscribe(data => console.log(data));
  }

getPlanning() {
  const body1 = {
        idRoom : 1,
        startDateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
        endDateTime: '2020-05-02 16:19:39'
      };
  const body2 = {
        idRoom : 2,
        startDateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
        endDateTime: '2020-05-02 16:19:39'
      };
  const body3 = {
        idRoom : 3,
        startDateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
        endDateTime: '2020-05-02 16:19:39'
      };
  const body4 = {
        idRoom : 4,
        startDateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
        endDateTime: '2020-05-02 16:19:39'
      };


  const one = this.http.post<RootPlanning>(this.baseUrl + 'room/planning', body1);
  const two = this.http.post<RootPlanning>(this.baseUrl + 'room/planning', body2);
  const three = this.http.post<RootPlanning>(this.baseUrl + 'room/planning', body3);
  const four = this.http.post<RootPlanning>(this.baseUrl + 'room/planning', body4);

  forkJoin([one, two, three, four]).subscribe(result => {
        console.log(result);
        const a = result[0].message;
        const b = result[1].message;
        const c = result[2].message;
        const d = result[3].message;

        const final = a.concat(b).concat(c).concat(d);
        final.sort((a, b) => (a.hour_start > b.hour_start) ? 1 : -1);

        // supprimer les heures des dates et creation d'un nouveau tableau
        for (const key in final) {
          if (final.hasOwnProperty(key)) {
            const element = final[key];
            this.ArrayDataSource.push(element.hour_start.substr(0, 10));
          }
        }
        const uniqueDate = new Set(this.ArrayDataSource);
        this.ListedesDatesDispo.emit( uniqueDate);
  });
  }

  getPlanningForaDate(dateDebut: string, dateFin: string) {
    const body1 = {
          idRoom : 1,
          startDateTime: dateDebut,
          endDateTime: dateFin
        };
    const body2 = {
          idRoom : 2,
          startDateTime: dateDebut,
          endDateTime: dateFin
        };
    const body3 = {
          idRoom : 3,
          startDateTime: dateDebut,
          endDateTime: dateFin
        };
    const body4 = {
          idRoom : 4,
          startDateTime: dateDebut,
          endDateTime: dateFin
        };


    const one = this.http.post<RootPlanning>(this.baseUrl + 'room/planning', body1);
    const two = this.http.post<RootPlanning>(this.baseUrl + 'room/planning', body2);
    const three = this.http.post<RootPlanning>(this.baseUrl + 'room/planning', body3);
    const four = this.http.post<RootPlanning>(this.baseUrl + 'room/planning', body4);

    forkJoin([one, two, three, four]).subscribe(result => {
          const a = result[0].message;
          const b = result[1].message;
          const c = result[2].message;
          const d = result[3].message;

          const final = a.concat(b).concat(c).concat(d);
          final.sort((a, b) => (a.hour_start > b.hour_start) ? 1 : -1);
          this.AvailabilityForaDay.emit(final);
          console.log(final);


    });
    }

    createSession(body) {

      return this.http.post(this.baseUrl + 'session/create', body);

    }
}





