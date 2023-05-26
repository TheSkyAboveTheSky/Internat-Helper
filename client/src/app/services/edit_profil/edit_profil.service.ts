import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const EDIT_API = 'http://localhost:8080/api/users/';
const user = JSON.parse(localStorage.getItem('user') || '{}');

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class EditProfilService {
  constructor(private http: HttpClient) {}
  editProfil(
    email: string,
    name: string,
    poste: string,
    date: Date,
    gender: string,
  ): Observable<any> {
    return this.http.put(
      EDIT_API + user.id,
      {
        email,
        name,
        poste,
        date,
        gender,
      },
      httpOptions
    );
  }
}
