import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Problem} from "../../_model/problem.model";
import {NgForm} from "@angular/forms";
import {problemService} from "../../services/problem/problem.service";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-add-new-poblem',
  templateUrl: './add-new-poblem.component.html',
  styleUrls: ['./add-new-poblem.component.css']
})
export class AddNewPoblemComponent implements OnInit {


  problem : Problem ={
    problemName :"",
    problemDescription: "",
    roomName:""
  }

  constructor( private  problemService: problemService) { }

  ngOnInit(): void {
    AddNewPoblemComponent
  }

  addProblem(problemForm: NgForm) {
    this.problemService.addProblem(this.problem).subscribe(
      (response: Problem) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )


  }
}
