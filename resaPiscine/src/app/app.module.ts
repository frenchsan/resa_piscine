import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { CustomMaterialModule } from './shared/custom-material/custom-material.module';
import { LoginComponent } from './login/login.component';
import { AvailabilityComponent } from './staff/availability/availability.component';
import { FormsModule } from '@angular/forms';
import { CreatedAvailabilityComponent } from './staff/created-availability/created-availability.component';


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ReservationListComponent,
    ReservationDetailComponent,
    LoginComponent,
    AvailabilityComponent,
    CreatedAvailabilityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:4200', 'piscine.api.bureau401.fr'],
      }
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
