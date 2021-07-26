import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(public dialog: MatDialog) {}

  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogContentExampleDialog);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  openDialog() {
    this.dialog.open(DialogContentExampleDialog, {
      data: {
        animal: 'panda'
      }
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  template: `<h1 mat-dialog-title>Favorite Animal</h1>
  <div mat-dialog-content>
    My favorite animal is:
    <ul>
      <li>
        <span *ngIf="data.animal === 'panda'">&#10003;</span> Panda
      </li>
      <li>
        <span *ngIf="data.animal === 'unicorn'">&#10003;</span> Unicorn
      </li>
      <li>
        <span *ngIf="data.animal === 'lion'">&#10003;</span> Lion
      </li>
    </ul>
  </div>
  
 
  `,
})
export class DialogContentExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}