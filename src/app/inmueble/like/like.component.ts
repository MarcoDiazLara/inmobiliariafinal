import { Component, OnInit } from '@angular/core';
import { LikegraficaComponent } from '../likegrafica/likegrafica.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent  {
  selected: Date | undefined;
  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(LikegraficaComponent, {
      width: '400px',
      height: '400px',
      data: { selectedDate: this.selected }

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Ventana emergente cerrada');
    });
  }

 
  }

  


