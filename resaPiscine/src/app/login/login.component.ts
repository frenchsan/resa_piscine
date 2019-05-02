import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from '../services/authentication.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent   {

  public baseUrl = environment.baseUrl;
  public loginForm = new FormGroup({
    username: new FormControl('noreply1@bureau401.fr'),
    password: new FormControl('test'),
  });


  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,
  ) {}

  public onSubmit() {
    console.warn(this.loginForm.value);
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password);

  }

  public login(username: string, password: string) {
    const body = {
      email: username,
      password,
    };
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    this.http.post(this.baseUrl + '/staff/login', body, { headers, observe: 'response' }).subscribe(
      (data) => {
        if (data.body.token) {
          localStorage.setItem('token', data.body.token);
          console.log(data.body.token);
          this.router.navigate(['sessionconsult']);
        }
      }
    );
  }
}
