import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    name: null,
    poste: null,
    password: null,
    date:null,
    gender:null,
    role:null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private notificationService:NotificationService) {}

  ngOnInit(): void {}

  onSubmit(): void {
     var { username, email, name, poste, password,date,role,gender } = this.form;
     role=[role];
     name=username;
     poste = poste || null;
    this.authService
      .register(username, email, name, poste, password,date,gender,role)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          if(this.isSuccessful){
            this.notificationService.success("Registered Successfully")
          }
        },
        error: (err) => {
          this.isSignUpFailed = true;
          this.notificationService.error(err.error.message);
        },
      });
  }
}
