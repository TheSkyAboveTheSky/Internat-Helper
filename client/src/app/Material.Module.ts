import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  exports : [MatTableModule,MatIconModule,MatPaginatorModule]
})
export class MaterialModule {}
