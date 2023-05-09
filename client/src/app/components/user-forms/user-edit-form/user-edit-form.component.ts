import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/Material.Module';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css'],
  imports:[CommonModule,MaterialModule],
  standalone: true,
})
export class UserEditFormComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<UserEditFormComponent> ) { }

  ngOnInit(): void {
  }
  onClose(): void{
    this.dialogRef.close();
  }

}
