import { Injectable} from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',})
export class NotificationService {
  constructor(private snackbar: MatSnackBar) {}

  config: MatSnackBarConfig = {
    duration: 90000,
    verticalPosition: 'top',
    horizontalPosition: 'right',
    panelClass:'notification'
  };

  success(msg: any) {
    this.config['panelClass'] = ['notification', 'success'];
    this.snackbar.open(msg, '', this.config);
  }
  error(msg: any) {
    this.config['panelClass'] = ['notification', 'error']; 
    this.snackbar.open(msg, '', this.config);
  }
  warn(msg:any){
    this.config['panelClass'] = ['notification', 'warn']; 
    this.snackbar.open(msg, '', this.config);
  }
}