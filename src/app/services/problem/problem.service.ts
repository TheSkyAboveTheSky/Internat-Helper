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

  private httpOptions={
     headers : new HttpHeaders({
      'Content-Type': 'multipart/form-data;boundary=----WebKitFormBoundary1KvzQ1rt2V1BBbb8',

    }),
  }


  public addProblem(problem: FormData) {
    const token = this.tokenStorageService.getToken();



    return this.httpClient.post<Problem>(PROBLEM_API, problem,this.httpOptions);
  }
  public getAllProducts(){
    return this.httpClient.get<Problem[]>(PROBLEM_API_LIST);
  }
}
