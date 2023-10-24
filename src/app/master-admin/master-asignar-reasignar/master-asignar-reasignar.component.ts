import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AsignasrasesorComponent } from '../ventanaemergente/asignasrasesor/asignasrasesor.component';
import { HttpService } from 'src/app/services/http/http.service';
import { reasignacionA } from 'src/app/services/Interface/Interfaces';


@Component({
  selector: 'app-master-asignar-reasignar',
  templateUrl: './master-asignar-reasignar.component.html',
  styleUrls: ['./master-asignar-reasignar.component.scss']
})
export class MasterAsignarReasignarComponent implements OnInit {

  columnas: string[] = ['Nombre_Inmueble', 'Calle','Nombre_Usuario','botonOption'];
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
  }
}
  

  // poner el nombre de una variable
  datosinmuebles: reasignacionA[]=[];

  dataSource = new MatTableDataSource(this.datosinmuebles);
  constructor(
    public dialog: MatDialog,
    private http:HttpService
    // Http para jalar el servicio 
  ) { }

  ngOnInit(): void {
    this.http.mostrarReasignacion().subscribe((data:any)=>{
    this.datosinmuebles=data;
    console.log(this.datosinmuebles);
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
