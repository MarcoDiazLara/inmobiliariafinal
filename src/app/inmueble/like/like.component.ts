import { Component, OnInit } from '@angular/core';
import { LikegraficaComponent } from '../likegrafica/likegrafica.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent  {
  selected: Date = new Date();
  saludo: string = ''; 
  
  constructor(public dialog: MatDialog) { }
  ngOnInit() {
    this.actualizarSaludo();
  }
  openDialog(): void {
    let dia= this.selected.getDate().toString();
    let mes= (this.selected.getMonth()+1).toString();
    let anio= this.selected.getFullYear().toString();
    let fecha1= anio+ "-" + mes +"-"+ dia;
    localStorage.setItem("p_fecha",fecha1);
   
    const dialogRef = this.dialog.open(LikegraficaComponent, {

      width: '400px',
      height: '400px',
      data: { selectedDate: this.selected }
      

    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
  CerraDialogo(){
    this.dialog.closeAll();
 
    }
    actualizarSaludo() {
      const horaActual = new Date().getHours();
  
      if (horaActual >= 0 && horaActual < 12) {
        this.saludo = 'Buenos días';
      } else if (horaActual >= 12 && horaActual < 18) {
        this.saludo = 'Buenas tardes';
      } else {
        this.saludo = 'Buenas noches';
      }
    }
    obtenerSaludo(): string {
      return `${this.saludo}!`;
    }
 
  }

  


