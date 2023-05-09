import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  readonly API_URL = "http://localhost:8080"

  readonly ENDPOINT_DEMANDES ="/demandes"

  constructor(private HttpClient: HttpClient) {


   }
   getDemandes(){
    return this.HttpClient.get(this.API_URL+this.ENDPOINT_DEMANDES)
   }
}
