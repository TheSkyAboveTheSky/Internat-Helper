import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/Material.Module';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css'],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  standalone: true,
})
export class UserEditFormComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<UserEditFormComponent>,
    private userService: UserService,
    private notificationService:NotificationService
  ) {}

  ngOnInit(): void {}
  myForm = this.userService.userForm;

  clearForm(): void {
    this.myForm.reset();
    this.userService.initializeUserForm();
  }
  onClose(): void {
    this.clearForm();
    this.dialogRef.close();
  }
  onUpdate(): void {
    if (this.myForm.valid) {
      this.userService
        .updateUser(this.myForm.value.id, this.myForm.value)
        .subscribe(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
            this.notificationService.error(error);
          }
        );
      this.clearForm();
      this.notificationService.success('Updated with Success!');
      this.onClose();
      window.location.reload();
    }
  }
}
