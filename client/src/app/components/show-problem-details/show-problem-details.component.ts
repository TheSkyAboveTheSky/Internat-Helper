import { Component, OnInit } from '@angular/core';
import {ProblemService} from "../../services/problem/problem.service";
import {Problem} from "../../_model/problem.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-show-problem-details',
  templateUrl: './show-problem-details.component.html',
  styleUrls: ['./show-problem-details.component.css']
})
export class ShowProblemDetailsComponent implements OnInit {

 problemDetails : Problem[] = [];
  displayedColumns :string[]=['Problem Id' , 'Problem Name' , 'Problem Description' , 'Problem roomName','Problem reportedBy',];
  constructor( private problemService : ProblemService) { }

  ngOnInit(): void {
    this.getAllProblems();
  }
public getAllProblems(){
    this.problemService.getAllProducts().subscribe(
      (resp: Problem[]) =>{
        console.log(resp);
        this.problemDetails=resp;
      },(error:HttpErrorResponse) =>{
        console.log(error);
      }
    )
}
}
