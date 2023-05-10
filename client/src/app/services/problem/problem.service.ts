import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Problem } from '../../_model/problem.model';
import { TokenStorageService } from '../token-storage/token-storage.service';

import {ProblemDetails} from "../../_model/ProblemDetails.model";



const PROBLEM_API = 'http://localhost:8080/api/problem/addProblem';
const PROBLEM_API_LIST = 'http://localhost:8080/api/problem/all';
const UPDATE_PROBLEM_API = "http://localhost:8080/api/problem";

@Injectable({
  providedIn: 'root',
})
export class ProblemService {
  constructor(
    private httpClient: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })
  };
  private httpOptionsState = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain'
    })
  };



  public addProblem(problem: FormData) {
    const token = this.tokenStorageService.getToken();



    return this.httpClient.post<Problem>(PROBLEM_API, problem);
  }
  public getAllProblems(){
    return this.httpClient.get<ProblemDetails[]>(PROBLEM_API_LIST);

  }
  public updateProblem(id:String,data:String)
  {
    return this.httpClient.put<Problem>(`${UPDATE_PROBLEM_API}/${id}`, data)
    .subscribe(
      (response: Problem) => {
        console.log(response);
      },
      (error: any) => {
        alert(error);
      }
    );
  }
}
