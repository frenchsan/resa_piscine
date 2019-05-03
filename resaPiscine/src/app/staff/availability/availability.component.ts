import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Availability } from 'src/app/shared/models';
import * as moment from 'moment';
@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getavailabilityList();
  }

  submitAvailabitityCreation( form) {
    const heures = form.value.heuredebut;
    const minutes = form.value.minutedebut;
    const debut = form.value.startDate.add(heures, 'hour').add(minutes, 'minutes');
    const fin = debut.clone();
    const final = fin.add( form.value.gameTotalDuration, 'minutes');

    const availability = {
      room_id : 1,
      startDateTime : moment(debut).format('YYYY-MM-DD HH:mm:ss'),
      endDateTime :  moment(final).format('YYYY-MM-DD HH:mm:ss'),
      gameTotalDuration : +form.value.gameTotalDuration
    };
    console.log( availability);
    this.adminService.createAvailability(availability);
  }

}
