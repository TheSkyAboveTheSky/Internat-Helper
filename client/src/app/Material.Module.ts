import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  exports : [MatTableModule,
            MatIconModule,
            MatPaginatorModule,
            MatFormFieldModule,
            MatDialogModule,
            MatToolbarModule
          ]

})
export class MaterialModule {}
