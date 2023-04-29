import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Problem} from "../../_model/problem.model";


const user = JSON.parse(localStorage.getItem('user') || '');

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProblemService {

  constructor(private httpClient: HttpClient) {}
  public addProblem(problem: Problem){
    return this.httpClient.post<Problem>("http://localhost:8080/api/problem/", problem);
  }

}
