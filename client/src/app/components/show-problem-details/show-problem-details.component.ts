import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../../services/problem/problem.service';
import { Problem } from '../../_model/problem.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ShowProblemImageDialogComponent } from '../show-problem-image-dialog/show-problem-image-dialog.component';
import { ImageProcessingService } from '../../image-processing.service';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { ProblemDetails } from '../../_model/ProblemDetails.model';

@Component({
  selector: 'app-show-problem-details',
  templateUrl: './show-problem-details.component.html',
  styleUrls: ['./show-problem-details.component.css'],
})
export class ShowProblemDetailsComponent implements OnInit {
  problemDetails: ProblemDetails[] = [];
  displayedColumns: string[] = [
    'Problem Id',
    'Problem Name',
    'Problem Description',
    'Problem roomName',
    'Problem reportedByname',
    'Images',
    'Situation'
  ];

  constructor(
    private problemService: ProblemService,
    public imagesDialog: MatDialog,
    private imageProcessingService: ImageProcessingService
  ) {}

  ngOnInit(): void {
    this.getAllProblems();
  }
  initializeDefaultSelectedOptions(): void {
    for (const problem of this.problemDetails) {
      this.selectedOption[problem.id] = problem.state;
    }
    console.log(this.selectedOption);
  }

  getAllProblems(): void {
    this.problemService
      .getAllProblems()
      .pipe(
        map((problems: ProblemDetails[]) =>
          problems.map((problem: ProblemDetails) =>
          this.imageProcessingService.createImages(problem)
          )
        )
      )
      .subscribe(
        (problemsWithImages: ProblemDetails[]) => {
          console.log(problemsWithImages);
          this.problemDetails = problemsWithImages;
          this.initializeDefaultSelectedOptions();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }

  showImages(problem: Problem): void {
    console.log(problem);
    console.log(problem.images);
    this.imagesDialog.open(ShowProblemImageDialogComponent, {
      data: {
        images: problem.images,
      },

      height: '500px',
      width: '800px',
    });
  }
  onStateChange(problemId: string): void {
    const selectedState = this.selectedOption[problemId];
    try{
      this.problemService.updateProblem(problemId,selectedState);
    }catch(error){
      alert(error);
    }

  }
  
  options = ['Non completé', 'En cours', 'Completé'];
  selectedOption: any = [];
  mongoUrl = 'mongodb://localhost:27017/mydatabase';
  collectionName = 'mycollection';
}