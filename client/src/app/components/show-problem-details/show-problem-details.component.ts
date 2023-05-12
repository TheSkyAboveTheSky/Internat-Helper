import { Component, OnInit, ViewChild } from '@angular/core';
import { ProblemService } from '../../services/problem/problem.service';
import { Problem } from 'src/app/models/problem';
import { ProblemDetails } from 'src/app/models/problem';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ShowProblemImageDialogComponent } from '../show-problem-image-dialog/show-problem-image-dialog.component';
import { ImageProcessingService } from '../../services/image-processing/image-processing.service';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


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
  DataSource!: MatTableDataSource<any>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sorter!:MatSort;
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
          this.DataSource = new MatTableDataSource(this.problemDetails);
          this.DataSource.sort = this.sorter;
          this.DataSource.paginator = this.paginator;
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
      window.location.reload();
    }catch(error){
      alert(error);
    }

  }
  
  options = ['Non completé', 'En cours', 'Completé'];
  selectedOption: any = [];
  mongoUrl = 'mongodb://localhost:27017/mydatabase';
  collectionName = 'mycollection';
}