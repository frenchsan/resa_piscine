import { Component, OnInit } from '@angular/core';
import { RoomService } from './services/room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'resaPiscine';
  constructor( private roomService: RoomService) {}

  ngOnInit(): void {
    this.roomService.getRoomList();
  }

}
