import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-idusuario',
  templateUrl: './idusuario.component.html',
  styleUrls: ['./idusuario.component.scss']
})
export class IdusuarioComponent implements OnInit {
 
  constructor( private dialog: MatDialog) { }
  socio!: any;
  ngOnInit(): void {
    
  this.socio=localStorage.getItem("Id_Socio");

  }
 
  CerraDialogo() {
    this.dialog.closeAll();

  }
}

