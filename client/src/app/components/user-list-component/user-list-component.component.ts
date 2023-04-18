import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/Material.Module';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-list-component',
  imports: [CommonModule, MaterialModule],
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css'],
  standalone:true
})
export class UserListComponentComponent implements OnInit {
  users = [{ name: '1' }, { name: '2' }, { nam: '3' }];
  dataSource: any;
  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.users);
  }
  displayedColumns: string[] = ['ID', 'N°'];
}
