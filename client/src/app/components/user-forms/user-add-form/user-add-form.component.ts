import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/Material.Module';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.css'],
  standalone:true,
  imports:[CommonModule,MaterialModule,ReactiveFormsModule,FormsModule]
})
export class UserAddFormComponent implements OnInit {
  window: any;

  constructor(
    public dialogRef:MatDialogRef<UserAddFormComponent>,
    private service:UserService
    ) { 
    
  }

  ngOnInit(): void {
  }
  myForm = this.service.userForm;
  onClose(): void{
    this.clearForm();
    this.dialogRef.close();
  }
  clearForm():void{
    this.myForm.reset();
    this.service.initializeUserForm();
  }
  onSubmit() {
    if (this.myForm.valid) {
      this.service.createUser(this.myForm.value).subscribe(
        (response) => {
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
      this.clearForm();
      this.onClose();
      window.location.reload();
    }
  }

}