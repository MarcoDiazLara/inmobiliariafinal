import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AsignasrasesorComponent } from '../ventanaemergente/asignasrasesor/asignasrasesor.component';
import { HttpService } from 'src/app/services/http/http.service';

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
  styleUrls: ['./master-asignar-reasignar.component.scss']
})
export class MasterAsignarReasignarComponent implements OnInit {

  
  displayedColumns: string[] = ['Id_InmuebleId_Inmueble', 'Nombre_Inmueble', 'Calle', 'Id_Usuario','Nombre_Usuario','botonOption'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // poner el nombre de una variable
  datosinmuebles:any[]=[];


  constructor(
    public dialog: MatDialog,
    private http:HttpService
    // Http para jalar el servicio 
  ) { }

  ngOnInit(): void {
    this.http.mostrarReasignacion().subscribe((data:any)=>{
    this.datosinmuebles=data;
    });
  }


  asignarAsesor(Id_InmuebleId_Inmueble:any,Id_Usuario:any){
    alert("Id_InmuebleId_Inmueble: "+Id_InmuebleId_Inmueble+"Id_Usuario: "+Id_Usuario)
    // mandar a llamar ventana emergente

   
  }
  
  openasesor() {

    const dialogRef = this.dialog.open(AsignasrasesorComponent, {
      width: '60vh',
      height: 'auto',
      disableClose: true
    });
  }

  openDialog(): void {

  }
}
