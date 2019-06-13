import { Component, OnInit, Input } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Plannning } from 'src/app/shared/models';
import { FormControl, Validators, FormGroupDirective, NgForm, FormGroup } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-do-reservation',
  templateUrl: './do-reservation.component.html',
  styleUrls: ['./do-reservation.component.scss']
})
export class DoReservationComponent implements OnInit {


  profileForm = new FormGroup({
    emailFormControl : new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    firstnameFormControl : new FormControl('', [Validators.required]),
    lastnameFormControl : new FormControl('', [Validators.required]),
    numberOfplayersFormControl : new FormControl('')
  });

  numberOfplayers;

  @Input() session: Plannning;
  @Input() index: number;
  constructor(private roomService: RoomService) { }


  matcher = new MyErrorStateMatcher();


  ngOnInit() {
  }

  createSession() {
    console.warn(this.profileForm.value.emailFormControl);
    const body =  {
      idAvailability : this.session.id_availability,
      startDateTime :  this.session.hour_start,
      numberOfPlayers : +this.profileForm.value.numberOfplayersFormControl,
      level : 1,
      subscribers : [
        {
          email: this.profileForm.value.emailFormControl.value,
          firstname: this.profileForm.value.firstnameFormControl.value,
          lastname: this.profileForm.value.lastnameFormControl.value,
          creator: true,
        }],
        discounts : []
        };

    this.roomService.createSession(body).subscribe(data => {
      console.log(data);
    });

    }


    // this.roomService.createSession().subscribe(data => {

    // });

  }












