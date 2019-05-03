import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatMomentDateModule,
    MatInputModule
  ],
  exports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatMomentDateModule,
    MatInputModule
  ]
})
export class CustomMaterialModule { }
