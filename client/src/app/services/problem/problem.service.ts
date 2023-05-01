import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Problem } from '../../_model/problem.model';
import { TokenStorageService } from '../token-storage/token-storage.service';


const PROBLEM_API = 'http://localhost:8080/api/problem/addProblem';
const PROBLEM_API_LIST = 'http://localhost:8080/api/problem/getAllProblems';

@Injectable({
  providedIn: 'root',
})
export class ProblemService {
  constructor(
    private httpClient: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}



  public addProblem(problem: FormData) {
    const token = this.tokenStorageService.getToken();
     console.log(token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + localStorage.getItem('jwtToken')

    });


    return this.httpClient.post<Problem>(PROBLEM_API, problem);
  }
  public getAllProducts(){
    return this.httpClient.get<Problem[]>(PROBLEM_API_LIST);
  }
}
