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
  DataSource:any;
  constructor() {}
  displayedColumns: string[] = ["name","action"];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers():void {
    this.DataSource = new MatTableDataSource([
      {name: 'John', age: 30, email: 'john@example.com' },
      {name: 'Mary', age: 25, email: 'mary@example.com' },
      {name: 'Bob', age: 40, email: 'bob@example.com' },
      {name: 'Bob', age: 40, email: 'bob@example.com' },
      {name: 'Bob', age: 40, email: 'bob@example.com' },
      {name: 'Bob', age: 40, email: 'bob@example.com' },
      {name: 'Bob', age: 40, email: 'bob@example.com' },
      {name: 'Bob', age: 40, email: 'bob@example.com' },
      {name: 'Bob', age: 40, email: 'bob@example.com' },
      {name: 'Bob', age: 40, email: 'bob@example.com' },
    ]);
    this.DataSource.paginator = this.paginator;
  }

}
