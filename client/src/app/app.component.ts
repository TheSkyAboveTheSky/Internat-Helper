import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage/token-storage.service';
import { O } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  username?: string;
  isUser = false;
  isStudent = false;
  isWorker = false;
  isAdmin = false;

  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.isUser = !!this.tokenStorageService.getToken();


    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.isStudent = this.roles.includes('ROLE_USER');
      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      this.isWorker = this.roles.includes('ROLE_WORKER');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
 