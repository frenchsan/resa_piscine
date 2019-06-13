import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  numberOfBusyRequests = 0;
  numberOfNonBusyRequests = 0;

  // Observable navItem source
  private _busySource = new BehaviorSubject<boolean>(null);
  // Observable navItem stream
  busy$ = this._busySource.asObservable();

  constructor() {}

  setLoading(value) {
    this._busySource.next(value);
  }
}
