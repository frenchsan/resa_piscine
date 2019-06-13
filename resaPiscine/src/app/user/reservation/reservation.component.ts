import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { SessionOuverte, Plannning } from 'src/app/shared/models';
import { Subscriber, Observable, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit, OnDestroy {


  @Input() reservation: SessionOuverte;
  isCardOpen = false;
  planning: Plannning[];
  eventAvailabilityForaDay: Subscription;
  eventdatedispo: Subscription;
  ListedesDatesDispo: String[];

  constructor(private roomService: RoomService, private router: Router) { }

  ngOnInit() {
    this.roomService.getPlanning();
    this.eventAvailabilityForaDay = this.roomService.AvailabilityForaDay.subscribe(data => this.planning = data);
    this.eventdatedispo = this.roomService.ListedesDatesDispo.subscribe(data => {
      this.ListedesDatesDispo = data;
      console.log('liste' , this.ListedesDatesDispo);
    });
  }

  openCard() {
    this.isCardOpen = !this.isCardOpen;
  }

  getlistSession() {

  }

  getRoomByDate(item) {
    this.planning = [];
    // 2020 - 05 - 02; 16; : 19; : 39;
    const hour_start = ' 00:00:00';
    const hour_end = ' 23:59:00';
    const dateDebut = item + hour_start;
    const dateFin = item + hour_end;
    console.log(item);
    this.roomService.getPlanningForaDate(dateDebut, dateFin);
    this.router.navigate(['/reservationDetail']);
  }

  ngOnDestroy(): void {
    this.eventAvailabilityForaDay.unsubscribe();
  }

}
