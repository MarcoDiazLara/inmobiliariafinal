import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {  Inject } from '@angular/core';

@Component({
  selector: 'app-informacionusuariosadm',
  templateUrl: './informacionusuariosadm.component.html',
  styleUrls: ['./informacionusuariosadm.component.scss']
})
export class InformacionusuariosadmComponent  {

  constructor(
    public dialogRef: MatDialogRef<InformacionusuariosadmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  cerrarVentanaEmergente() {
    this.dialogRef.close();
  }

}
