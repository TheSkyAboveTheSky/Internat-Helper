import { Component, OnInit,ViewChild } from '@angular/core';
import { MaterialModule } from 'src/app/Material.Module';
import { CommonModule } from '@angular/common';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { UserAddFormComponent } from '../user-forms/user-add-form/user-add-form.component';
import { UserEditFormComponent } from '../user-forms/user-edit-form/user-edit-form.component';
@Component({
  selector: 'app-user-list',
  imports: [CommonModule, MaterialModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone:true
})
export class UserListComponent implements OnInit {
  constructor(private dialog:MatDialog) {}
  displayedColumns: string[] = ["icon","username","age","email","role","action"];
  DataSource!:MatTableDataSource<any>;
  @ViewChild('paginator') paginator!: MatPaginator;
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers():void {
    const users = [
      {Username: 'John1', age: 30, email: 'john@example.com' ,Role:"Admin"},
      {Username: 'John2', age: 30, email: 'john@example.com' ,Role:"Admin"},
      {Username: 'John3', age: 30, email: 'john@example.com' ,Role:"Admin"},
      {Username: 'John4', age: 30, email: 'john@example.com' ,Role:"Admin"},
      {Username: 'John5', age: 30, email: 'john@example.com' ,Role:"Admin"},
      {Username: 'John6', age: 30, email: 'john@example.com' ,Role:"Admin"},
      {Username: 'John7', age: 30, email: 'john@example.com' ,Role:"Admin"},
      {Username: 'John8', age: 30, email: 'john@example.com' ,Role:"Admin"},
      {Username: 'John9', age: 30, email: 'john@example.com' ,Role:"Admin"},
      {Username: 'John10', age: 30, email: 'john@example.com' ,Role:"Admin"},
      {Username: 'John11', age: 30, email: 'john@example.com' ,Role:"Admin"},
    ];
    this.DataSource = new MatTableDataSource(users);
  }
  ngAfterViewInit():void{
    this.DataSource.paginator = this.paginator;
  }
  onCreate() {
    const config: MatDialogConfig = new MatDialogConfig();
    config.autoFocus = true;
    config.width = '60%';
    config.height = '40%';
    this.dialog.open(UserAddFormComponent,config);
  }
  onEdit(row:any) {
    const config: MatDialogConfig = new MatDialogConfig();
    config.autoFocus = true;
    config.width = '60%';
    config.height = '40%';
    this.dialog.open(UserEditFormComponent,config);
  }

}