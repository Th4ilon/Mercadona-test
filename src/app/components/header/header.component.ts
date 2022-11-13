import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { loggingComponent } from '../logging/logging.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
   
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(loggingComponent, {      
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
