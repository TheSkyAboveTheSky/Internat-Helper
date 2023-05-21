import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from 'src/app/Material.Module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserAddFormComponent } from '../user-forms/user-add-form/user-add-form.component';
import { UserEditFormComponent } from '../user-forms/user-edit-form/user-edit-form.component';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { DialogService } from 'src/app/services/dialog/dialog.service';
@Component({
  selector: 'app-user-list',
  imports: [CommonModule, MaterialModule,FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
})
export class UserListComponent implements OnInit {
  users:any;
  constructor
    (private dialog: MatDialog,
    private userService:UserService,
    private notification:NotificationService,
    private dialogService:DialogService ) {}
  displayedColumns: string[] = [
    'icon',
    'username',
    'age',
    'email',
    'role',
    'gender',
    'poste',
    'action',
  ];
  DataSource!: MatTableDataSource<any>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sorter!:MatSort;
  keySearch:String='';
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(): void {
    this.userService.getAllUsers().subscribe((response) =>{
      this.users = response;
      this.DataSource = new MatTableDataSource(this.users);
      console.log(this.users);
      this.DataSource.sort = this.sorter;
      this.DataSource.paginator = this.paginator;
    },
    (error)=> console.log(error)
    );

  }
  calculateAge(dateOfBirth: string): number {
    const today: Date = new Date(); 
    const birthDate: Date = new Date(dateOfBirth); 
    let age: number = today.getFullYear() - birthDate.getFullYear(); 
    const hasBirthdayPassed: boolean =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassed) {
      age--;
    }

    return age;
  }
  
  onCreate() {
    const config: MatDialogConfig = new MatDialogConfig();
    config.autoFocus = true;
    config.width = '80%';
    config.height = '60%';
    this.dialog.open(UserAddFormComponent, config);
  }
  onEdit(row: any) {
    this.userService.fillEditUserForm(row);
    console.log(row);
    const config: MatDialogConfig = new MatDialogConfig();
    config.autoFocus = true;
    config.width = '60%';
    config.height = '40%';
    this.dialog.open(UserEditFormComponent, config);
  }
  onDelete(row:any)
  {
    this.dialogService.openConfirmDialog()
    .afterClosed()
    .subscribe(
      (response) =>{
        if(response){
          this.userService.deleteUser(row).subscribe(
            (response) =>{
              console.log(response);
            },
            (error)=>{
              console.log(error);
            }
          );
          this.notification.warn("! Deleted successfully");
                }
              },(error) => {
                this.notification.error("Error deleting User");
              },()=>{
                window.location.reload();
              }
            )
  }
}