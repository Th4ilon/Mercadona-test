import { HttpResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from './models/userModel';
import { LoggingService } from './service/logging.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss']
})
export class loggingComponent implements OnInit {
  loggingForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    // email: new FormControl('', Validators.compose([
    //   Validators.required,
    //   Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    // ]))
  });

  // get username() { return this.loggingForm.get('username'); }
  // get password() { return this.loggingForm.get('password'); }

  submitted: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<loggingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private loggingService: LoggingService,
    private snackBar: MatSnackBar
  ) { }
  

  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.loggingService.login(this.loggingForm.value as UserModel).subscribe((response: any) => {
      if (response.status === 200) {
        this.popOutSuccessMessage();
        this.dialogRef.close();
      } else {
        this.popOutErrorMessage();
        this.dialogRef.close();
      }
    });
  }

  private popOutSuccessMessage() {
    this.snackBar.open('Success', 'Close', {
      duration: 2000,
    });
  }

  private popOutErrorMessage() {
    this.snackBar.open('Error', 'Close', {
      duration: 2000,
    });
  }
  

}
