import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Problem } from 'src/app/models/problem';
import { NgForm } from '@angular/forms';
import { ProblemService } from '../../services/problem/problem.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FileHandle } from 'src/app/models/file-handler';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-problem',
  templateUrl: './add-new-problem.component.html',
  styleUrls: ['./add-new-problem.component.css'],
})
export class AddNewProblemComponent implements OnInit {
  problem: Problem = {
    name: '',
    description: '',
    roomName: '',

    reportedBy: '',
    images: [],
  };

  currentUser: any;

  constructor(
    private problemService: ProblemService,
    private tokenStorageService: TokenStorageService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();

    this.problem.reportedBy = this.currentUser.id;
    if (this.currentUser.poste !== 'etudiant') {
      // Redirect the user to another page
      this.router.navigate(['/home']);
    }
  }

  addProblem(problemForm: NgForm) {
    this.problem.reportedBy = this.currentUser.id;
    const problemFormData = this.prepareFormData(this.problem);
    this.problemService.addProblem(problemFormData).subscribe(
      (response: Problem) => {
        problemForm.reset();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );

    console.log(problemFormData);
    console.log(this.problem);
    console.log(this.problem.images);
    console.log(problemFormData);
  }
  prepareFormData(problem: Problem): FormData {
    const formData = new FormData();
    formData.append('name', problem.name);
    formData.append('description', problem.description);
    formData.append('reportedById', problem.reportedBy);
    formData.append('roomName', problem.roomName);

    for (let i = 0; i < problem.images.length; i++) {
      formData.append(
        'images',
        problem.images[i].file,
        problem.images[i].file.name
      );
    }

    return formData;
  }

  onFileSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];

      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        ),
      };
      this.problem.images.push(fileHandle);
    }
  }

  removeImages(i: number) {
    this.problem.images.splice(i, 1);
  }
}
