import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FileHandle } from 'src/app/models/file-handler';

@Component({
  selector: 'app-show-problem-image-dialog',
  templateUrl: './show-problem-image-dialog.component.html',
  styleUrls: ['./show-problem-image-dialog.component.css']
})
export class ShowProblemImageDialogComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit(): void {
    this.receiveImages();
  }

  receiveImages() {
    console.log(this.data);
  }
}
