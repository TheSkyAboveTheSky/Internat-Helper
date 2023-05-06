import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/Material.Module';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.css'],
  standalone:true,
  imports:[CommonModule,MaterialModule]
})
export class UserAddFormComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<UserAddFormComponent>) { 
    
  }

  ngOnInit(): void {
  }
  onClose(): void{
    this.dialogRef.close();
  }

}
