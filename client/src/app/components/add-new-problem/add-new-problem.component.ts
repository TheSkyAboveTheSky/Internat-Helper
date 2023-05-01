import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Problem} from "../../_model/problem.model";
import {NgForm} from "@angular/forms";
import {ProblemService} from "../../services/problem/problem.service";
import {HttpErrorResponse} from "@angular/common/http";
import {FileHandle} from "../../_model/file-handle-model";
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-add-new-problem',
  templateUrl: './add-new-problem.component.html',
  styleUrls: ['./add-new-problem.component.css']
})
export class AddNewProblemComponent implements OnInit {

  problem: Problem = {
    name: "",
    description: "",
    roomName: "",
    reportedBy: this.tokenStorageService.getUser(),
    Images :[]
  };

  currentUser: any;

  constructor(private problemService: ProblemService, private tokenStorageService: TokenStorageService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.problem.reportedBy =this.currentUser;
  }

  addProblem(problemForm: NgForm) {
     const problemFormData = this.prepareFormData(this.problem);
    this.problem.reportedBy = this.currentUser;
    this.problemService.addProblem(problemFormData).subscribe(
      (response: Problem) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  prepareFormData( problem : Problem): FormData{
    const formData = new FormData();
    formData.append(
      'problem',
      new Blob([ JSON.stringify(problem)], {type:'application/json'})
    );
    for(var i = 0; i < problem.Images.length; i++){
      formData.append(
        'imageFile',
        problem.Images[i].file,
        problem.Images[i].file.name
      );
    }

    return formData
  }

  onFileSelected(event :any) {
    if(event.target.files){
        const file = event.target.files[0];

        const fileHandle : FileHandle= {
          file: file,
          url: this.sanitizer.bypassSecurityTrustUrl(
            window.URL.createObjectURL(file)
          )
        }
        this.problem.Images.push(fileHandle);


    }

  }

  removeImages(i: number) {
    this.problem.Images.splice(i,1);

  }
}
