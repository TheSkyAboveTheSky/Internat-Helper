import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  exports : [
            MatTableModule,
            MatPaginatorModule,
            MatButtonModule,
            MatIconModule,
            MatCardModule,
            MatToolbarModule,
            MatGridListModule,
            MatInputModule,
            MatFormFieldModule,
            MatRadioModule,
            MatSelectModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatCheckboxModule,
            MatSnackBarModule,
            MatSortModule,
            MatDialogModule
          ]
})
export class MaterialModule {}