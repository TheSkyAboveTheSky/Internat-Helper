import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user';
import { FormGroup,FormControl,Validators } from '@angular/forms';

const API_URL = 'http://localhost:8080/api/test/';
const USER_URL = 'http://localhost:8080/api/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  // Form
  userForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    username: new FormControl('',Validators.required),
    email: new FormControl('',Validators.compose([Validators.required,Validators.email])),
    gender: new FormControl(''),
    date: new FormControl('',Validators.required),
    poste: new FormControl(''),
    roles: new FormControl(''),
  });
  initializeUserForm():void{
    const user = {
      id:'',
      username:'',
      email:'',
      gender:'male',
      date:'',
      poste:'',
      roles:'',
    };
    this.userForm.setValue(user);
  }
  fillEditUserForm(user:any):void{
    const data = {
      id: user["_id"],
      username: user["username"],
      email: user["email"],
      gender: user["gender"],
      date: user["date"],
      poste: user["poste"],
      roles: user["roles"]
    };
    this.userForm.setValue(data);
  }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  getAllUsers(): Observable<any> {
    return this.http.get(USER_URL);
  }
}