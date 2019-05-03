import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { LoginComponent } from './login/login.component';
import { AvailabilityComponent } from './staff/availability/availability.component';

const routes: Routes = [
  {path: 'reservationList', component: ReservationListComponent},
  {path: 'reservationDetail', component: ReservationDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'availability', component: AvailabilityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
