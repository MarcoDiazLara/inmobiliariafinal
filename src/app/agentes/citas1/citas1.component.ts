import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {  Inject } from '@angular/core';

@Component({
  selector: 'app-citas1',
  templateUrl: './citas1.component.html',
  styleUrls: ['./citas1.component.scss']
})
export class Citas1Component  {
  constructor(
    public dialogRef: MatDialogRef<Citas1Component>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  cerrarVentanaEmergente() {
    this.dialogRef.close();
  }

}
