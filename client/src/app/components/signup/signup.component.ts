import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: `./signup.component.html`
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:8080/api/signup', user).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }
}
