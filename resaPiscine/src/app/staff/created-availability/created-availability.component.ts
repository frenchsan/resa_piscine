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

  availability: any[];
  availabilityObserver;
  constructor( private adminService: AdminService) { }

  ngOnInit() {
    this.availabilityObserver = this.adminService.availabilityListEmitter.subscribe(data => {
      this.availability = data;
    });
    console.log('ave',  this.availability);

  }

  coucou(item) {
    console.log(item);
  }

  ngOnDestroy(): void {
    this.availabilityObserver.unsubscribe();
  }
}
