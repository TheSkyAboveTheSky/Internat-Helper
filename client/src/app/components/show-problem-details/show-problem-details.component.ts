import { Component, OnInit } from '@angular/core';
import {ProblemService} from "../../services/problem/problem.service";
import {Problem} from "../../_model/problem.model";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {ShowProblemImageDialogComponent} from "../show-problem-image-dialog/show-problem-image-dialog.component";
import {ImageProcessingService} from "../../image-processing.service";
import {map} from "rxjs";

@Component({
  selector: 'app-show-problem-details',
  templateUrl: './show-problem-details.component.html',
  styleUrls: ['./show-problem-details.component.css']
})
export class ShowProblemDetailsComponent implements OnInit {

 problemDetails : Problem[] = [];
  displayedColumns :string[]=['Problem Id' , 'Problem Name' , 'Problem Description' , 'Problem roomName','Problem reportedBy','Images'];
  constructor( private problemService : ProblemService , public imagesDialog: MatDialog , private  imageProcessingServices:ImageProcessingService) { }


  ngOnInit(): void {
    this.getAllProblems();
  }
public getAllProblems(){
    this.problemService.getAllProducts()
      .pipe(
        map((x:Problem[],i) => x.map((problem :Problem) =>this.imageProcessingServices.createImages(problem)) )
      ).subscribe(
      (resp: Problem[]) =>{
        console.log(resp);
        this.problemDetails=resp;
      },(error:HttpErrorResponse) =>{
        console.log(error);
      }
    )
}

  showImages(problem : Problem) {
    console.log(problem);
    this.imagesDialog.open(ShowProblemImageDialogComponent,{
      data:{images : problem.Images,
      },
      height: '500px',
      width : '800px'
    })

  }
}
