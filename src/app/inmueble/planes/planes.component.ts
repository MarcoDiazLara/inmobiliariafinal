import { Component, OnInit } from '@angular/core';
import { MetododepagoComponent } from 'src/app/metododepago/metododepago.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(bandera:number): void {
    let auxi=bandera.toString();
    localStorage.setItem("tipodeplan",auxi);
    const dialogRef = this.dialog.open(MetododepagoComponent, {
  
    });

}

CerraDialogo(){
  this.dialog.closeAll();

  }
}
