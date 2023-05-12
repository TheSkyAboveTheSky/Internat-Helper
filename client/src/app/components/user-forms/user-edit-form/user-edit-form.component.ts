import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/Material.Module';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css'],
  imports:[CommonModule,MaterialModule,FormsModule,ReactiveFormsModule],
  standalone: true,
})
export class UserEditFormComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<UserEditFormComponent> ,
    private userService:UserService) { }

  ngOnInit(): void {
  }
  myForm = this.userService.userForm;

  clearForm():void{
    this.myForm.reset();
    this.userService.initializeUserForm();
  }
  onClose(): void{
    this.clearForm();
    this.dialogRef.close();
  }
  onUpdate():void{
    if (this.myForm.valid) {
      this.userService.updateUser(this.myForm.value.id,this.myForm.value).subscribe(
        (response) => {
          console.log(response);
          alert("YES");
        },
        (error) => {
          console.log(error);
          alert("NO");
        }
      );
      this.clearForm();
      this.onClose();
      window.location.reload();
    }
  }

}