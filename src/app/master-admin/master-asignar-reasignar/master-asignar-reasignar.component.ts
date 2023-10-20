import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { AsignasrasesorComponent } from '../ventanaemergente/asignasrasesor/asignasrasesor.component';

export interface PeriodicElement {

  Nombre_Inmueble: string;
  Id_InmuebleId_Inmueble: number;
  Calle: string;
  Id_Usuario: number;
  // Estatus_Seguimiento:string;
  Nombre_Usuario:string;
  botonOption:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Id_InmuebleId_Inmueble: 1, Nombre_Inmueble: 'casa3.png', Calle: 'Juan Carlos', Id_Usuario: 23032023,Nombre_Usuario:'group_add',botonOption:''},
  {Id_InmuebleId_Inmueble: 2, Nombre_Inmueble: 'casa4.png', Calle: 'Juan Carlos', Id_Usuario: 23032024,Nombre_Usuario:'group_add',botonOption:''},  // {Id_InmuebleId_Inmueble: 3, Nombre_Inmueble: 'cocina.png', Calle: 'Juan Carlos', Id_Usuario: 23032023,Nombre_Usuario:'pendiente'},
];

@Component({
  selector: 'app-master-asignar-reasignar',
  templateUrl: './master-asignar-reasignar.component.html',
  styleUrls: ['./master-asignar-reasignar.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    
  ],
})
export class MasterAsignarReasignarComponent implements OnInit {

  
  displayedColumns: string[] = ['Id_InmuebleId_Inmueble', 'Nombre_Inmueble', 'Calle', 'Id_Usuario','Nombre_Usuario','botonOption'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
  }


  asignarAsesor(Id_InmuebleId_Inmueble:any,Id_Usuario:any){
    alert("Id_InmuebleId_Inmueble: "+Id_InmuebleId_Inmueble+"Id_Usuario: "+Id_Usuario)
    // mandar a llamar ventana emergente

   
  }
  openpassword() {

    // const dialogRef = this.dialog.open(this.asignarAsesor, {
    //   width: '60vh',
    //   height: 'auto',
    //   disableClose: true
    // });
  }

  openDialog(): void {

  }
}
