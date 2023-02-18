import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe',
      amenities: 'air condition',
      price: 1000,
      photos: '',
      checkinTime: new Date(),
      checkoutTime: new Date(),
    },
    {
      roomNumber: 2,
      roomType: 'Standard',
      amenities: 'table',
      price: 500,
      photos: '',
      checkinTime: new Date(),
      checkoutTime: new Date(),
    },
    {
      roomNumber: 3,
      roomType: 'Basic',
      amenities: 'bed',
      price: 250,
      photos: '',
      checkinTime: new Date(),
      checkoutTime: new Date(),
    },
  ];

  constructor() {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
