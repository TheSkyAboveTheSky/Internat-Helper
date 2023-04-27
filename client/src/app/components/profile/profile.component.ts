import { Component, OnInit } from '@angular/core';

function getUser() {
  return JSON.parse(localStorage.getItem('user') || '');
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  currentUser: any;

  constructor() {}

  ngOnInit(): void {
    this.currentUser = getUser();
  }
}
