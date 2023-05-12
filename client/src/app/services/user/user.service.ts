import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user';
import { FormGroup,FormControl,Validators } from '@angular/forms';

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
    roles: new FormControl([[]]),
    name: new FormControl('',Validators.required),
  });
  initializeUserForm():void{
    const user = {
      id:'',
      username:'Test',
      email:'ok@example',
      gender:'Male',
      date:'',
      poste:'',
      roles:'',
      name:'',
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
      roles: user["roles"],
      name: user["name"],
    };
    this.userForm.setValue(data);
  }
  getAllUsers(): Observable<any> {
    return this.http.get(USER_URL);
  }
  getUser(id: string): Observable<any> {
    return this.http.get(`${USER_URL}/${id}`);
  }
  createUser(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    user.roles = [user.roles];
    user.password="azerty";
    return this.http.post('http://localhost:8080/api/auth/signup', user,{headers});
  }

  updateUser(id: string, user: UserModel): Observable<any> {

    return this.http.put(`${USER_URL}/${id}`, user);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${USER_URL}/${id}`);
  }
  

}