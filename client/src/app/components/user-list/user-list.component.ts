import { Component, OnInit,ViewChild } from '@angular/core';
import { MaterialModule } from 'src/app/Material.Module';
import { CommonModule } from '@angular/common';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-user-list',
  imports: [CommonModule, MaterialModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone:true
})
export class UserListComponent implements OnInit {
  constructor() {}
  displayedColumns: string[] = ["username","age","email","role","action"];
  @ViewChild('paginator') paginator!: MatPaginator;
  ngOnInit(): void {
    this.getAllUsers();
  }
  DataSource!:MatTableDataSource<any>;
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

}
