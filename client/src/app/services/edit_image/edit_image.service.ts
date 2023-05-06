import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const user = JSON.parse(localStorage.getItem('user') || '');
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class EditImageService {
  static EDIT_API = 'http://localhost:8080/api/auth/edit_image/';



  constructor(private http: HttpClient) {}

  editImage(picByte: Uint8Array): Observable<any> {

    const formData = new FormData();
    formData.append('picByte', new Blob([picByte], { type: 'image/png'} ));
    return this.http.put(EditImageService.EDIT_API + user?.username,
      JSON.stringify(formData),
      httpOptions
    );
  }
}
