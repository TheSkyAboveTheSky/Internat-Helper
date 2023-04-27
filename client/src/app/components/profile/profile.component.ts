import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

function getUser() {
  return JSON.parse(localStorage.getItem('user') || '');
}
=======
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
>>>>>>> origin
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
