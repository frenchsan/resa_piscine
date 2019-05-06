import { Component, OnInit, Input } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { SessionOuverte, Plannning } from 'src/app/shared/models';
import { Subscriber, Observable } from 'rxjs';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  @Input() reservation: SessionOuverte;
  isCardOpen = false;
  planning: Plannning[];
  eventplanning: Observable;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.eventplanning = this.roomService.planning.subscribe(data => this.planning = data);
  }

  openCard() {
    this.isCardOpen = !this.isCardOpen;
  }

  getlistSession() {

    this.roomService.getPlanning();
  }

}
