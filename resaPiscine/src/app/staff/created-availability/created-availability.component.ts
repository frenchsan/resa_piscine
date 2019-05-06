import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { SessionOuverte } from '../../shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-created-availability',
  templateUrl: './created-availability.component.html',
  styleUrls: ['./created-availability.component.scss']
})
export class CreatedAvailabilityComponent implements OnInit, OnDestroy {

  open = false;
  availability: SessionOuverte[];
  availabilityObserver;
  constructor( private adminService: AdminService) { }



  ngOnInit() {
    this.adminService.getavailabilityList();
    this.availabilityObserver = this.adminService.availabilityListEmitter.subscribe(data => {
      this.availability = data;
    });

  }

  createSession(item) {
      console.log('click ', open);
      this.open = !this.open;
  }

  ngOnDestroy(): void {
    this.availabilityObserver.unsubscribe();
  }
}
