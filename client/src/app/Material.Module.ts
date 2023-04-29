import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  exports : [MatTableModule,MatIconModule,MatPaginatorModule,MatFormFieldModule]
})
export class MaterialModule {}
