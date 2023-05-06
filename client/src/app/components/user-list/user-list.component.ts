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
@Component({
  selector: 'app-user-list',
  imports: [CommonModule, MaterialModule,FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
})
export class UserListComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
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
  async getAllUsers(): Promise<any> {
    const users = [
      { Username: 'John 1', age: 30, email: 'john@example.com', Role: 'Admin' ,Gender:'Male',Poste:'Technicien'},
      { Username: 'John 2', age: 32, email: 'john@example.com', Role: 'Admin' ,Gender:'Male',Poste:'Technicien'},
      { Username: 'John 3', age: 27, email: 'john@example.com', Role: 'Admin' ,Gender:'Male',Poste:'Technicien'},
      { Username: 'John 4', age: 30, email: 'john@example.com', Role: 'Admin' ,Gender:'homme',Poste:'Technicien'},
      { Username: 'John 5', age: 30, email: 'john@example.com', Role: 'Admin' ,Gender:'femme',Poste:'Technicien'},
      { Username: 'John 6', age: 30, email: 'john@example.com', Role: 'Admin' ,Gender:'Male',Poste:'Technicien'},
      { Username: 'John 7', age: 30, email: 'john@example.com', Role: 'Admin' ,Gender:'Male',Poste:'Technicien'},
      { Username: 'John 8', age: 30, email: 'john@example.com', Role: 'Admin' ,Gender:'Male',Poste:'Technicien'},
      { Username: 'John 9', age: 30, email: 'john@example.com', Role: 'Admin' ,Gender:'Male',Poste:'Technicien'},
      { Username: 'John 10', age: 30, email: 'john@example.com', Role: 'Admin' ,Gender:'Male',Poste:'Technicien'},
      { Username: 'John 11', age: 30, email: 'john@example.com', Role: 'Admin' ,Gender:'Male',Poste:'Technicien'},
      { Username: 'John 12', age: 30, email: 'john@example.com', Role: 'Admin' ,Gender:'Male',Poste:'Technicien'},
    ];
    this.DataSource = new MatTableDataSource(users);

  }
  ngAfterViewInit(): void {
    this.DataSource.sort = this.sorter;
    this.DataSource.paginator = this.paginator;

  }
  onCreate() {
    const config: MatDialogConfig = new MatDialogConfig();
    config.autoFocus = true;
    config.width = '80%';
    config.height = '60%';
    this.dialog.open(UserAddFormComponent, config);
  }
  onEdit(row: any) {
    const config: MatDialogConfig = new MatDialogConfig();
    config.autoFocus = true;
    config.width = '60%';
    config.height = '40%';
    this.dialog.open(UserEditFormComponent, config);
  }
}
