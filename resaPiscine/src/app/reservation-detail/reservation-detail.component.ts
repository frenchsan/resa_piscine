import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoomService } from '../services/room.service';
import { Plannning } from '../shared/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.scss']
})
export class ReservationDetailComponent implements OnInit, OnDestroy {

  planning: Plannning[];
  eventAvailabilityForaDay: Subscription;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getPlanning();
    this.eventAvailabilityForaDay = this.roomService.AvailabilityForaDay.subscribe(data => this.planning = data);

  }

  ngOnDestroy(): void {
   this.eventAvailabilityForaDay.unsubscribe();
  }
}
