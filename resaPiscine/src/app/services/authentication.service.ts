import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient, private router: Router) { }

  public login(username: string, password: string) {
    const body = {
      email: username,
      password,
    };
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    this.http.post(this.baseUrl + 'staff/login', body, { headers, observe: 'response' }).subscribe(
      (data) => {
        // tslint:disable-next-line:no-string-literal
        if (data.body['token']) {
          // tslint:disable-next-line:no-string-literal
          localStorage.setItem('token', data.body['token']);
          // tslint:disable-next-line:no-string-literal
          console.log(data.body['token']);
          this.router.navigate(['availability']);
        }
      }
    );
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
  setToken(arg0: any): any {
    throw new Error('Method not implemented.');
  }
}
