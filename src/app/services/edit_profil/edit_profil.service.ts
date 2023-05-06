import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const EDIT_API = 'http://localhost:8080/api/auth/edit_profil/';
const user = JSON.parse(localStorage.getItem('user') || '');

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
    date: string
  ): Observable<any> {
    return this.http.put(
      EDIT_API + user.username,
      {
        email,
        name,
        poste,
        date,
      },
      httpOptions
    );
  }
}
