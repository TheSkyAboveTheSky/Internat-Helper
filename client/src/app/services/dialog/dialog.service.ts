import { Injectable } from '@angular/core';
import { UserDeleteFormComponent } from 'src/app/components/user-forms/user-delete-form/user-delete-form.component';
import { MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }
  openConfirmDialog(){
    return this.dialog.open(UserDeleteFormComponent,{
      width:'450px',
      panelClass:'confirm-dialog-container',
    });
  }
}
