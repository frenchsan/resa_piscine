import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { CustomMaterialModule } from './shared/custom-material/custom-material.module';
import { LoginComponent } from './login/login.component';
import { AvailabilityComponent } from './staff/availability/availability.component';
import { FormsModule } from '@angular/forms';
import { CreatedAvailabilityComponent } from './staff/created-availability/created-availability.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { CreateSessionComponent } from './create-session/create-session.component';
import { ReservationComponent } from './user/reservation/reservation.component';
import { DoReservationComponent } from './user/do-reservation/do-reservation.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LoadingInterceptorService } from './shared/loading-interceptor.service';
import { SpinnerDuringRequestDirective } from './shared/spinner-during-request.directive';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

registerLocaleData(localeFr, 'fr');

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
    CreatedAvailabilityComponent,
    CreateSessionComponent,
    ReservationComponent,
    DoReservationComponent,
    SpinnerDuringRequestDirective,
    SpinnerComponent,
  ],
  entryComponents : [
    SpinnerComponent
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
    FormsModule,
    ScrollingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }, // replace "en-US" with your locale
    {
      provide: HTTP_INTERCEPTORS,
        useClass: LoadingInterceptorService,
        multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
