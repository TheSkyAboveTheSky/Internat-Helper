import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/Material.Module';

@Component({
  selector: 'app-user-delete-form',
  templateUrl: './user-delete-form.component.html',
  styleUrls: ['./user-delete-form.component.css'],
  standalone:true,
  imports:[CommonModule,MaterialModule],
})
export class UserDeleteFormComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<UserDeleteFormComponent>) { }

  ngOnInit(): void {
  }
  closeDialog():void{
    this.dialogRef.close(false);
  }

}
