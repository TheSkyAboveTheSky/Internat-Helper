import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FileHandle} from "../../_model/file-handle-model";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

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
