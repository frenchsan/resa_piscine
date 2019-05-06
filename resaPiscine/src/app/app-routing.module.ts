import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { LoginComponent } from './login/login.component';
import { AvailabilityComponent } from './staff/availability/availability.component';
import { CreatedAvailabilityComponent } from './staff/created-availability/created-availability.component';
import { ReservationComponent } from './user/reservation/reservation.component';

const routes: Routes = [
  {path: 'reservationList', component: ReservationListComponent},
  {path: 'reservationDetail', component: ReservationDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'availability', component: AvailabilityComponent},
  {path: 'ListeCreneaux', component: ReservationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
