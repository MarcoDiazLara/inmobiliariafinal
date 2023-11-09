import { Component, OnInit } from '@angular/core';
import {MatTableDataSource,} from '@angular/material/table';




export interface PeriodicElement {
  Picture1: string;
  Id_Seguimiento: number;
  Prospecto_Interesado: string;
  Fecha_Realizacion: number;
  Estatus_Seguimiento: string;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Id_Seguimiento: 1, Prospecto_Interesado: 'Juan Carlos', Picture1: 'casa3.png', Fecha_Realizacion: 23032023,Estatus_Seguimiento:'proceso'},
  {Id_Seguimiento: 2, Prospecto_Interesado: 'Juan Carlos', Picture1: 'casita.png', Fecha_Realizacion: 23032023,Estatus_Seguimiento:'completado'},
  {Id_Seguimiento: 3, Prospecto_Interesado: 'Juan Carlos', Picture1: 'cocina.png', Fecha_Realizacion: 23032023,Estatus_Seguimiento:'pendiente'},
];


@Component({
  selector: 'app-inventarioagentes',
  templateUrl: './inventarioagentes.component.html',
  styleUrls: ['./inventarioagentes.component.scss'],

})
export class InventarioagentesComponent implements OnInit {

  displayedColumns: string[] = ['Id_Seguimiento', 'Picture1', 'Prospecto_Interesado', 'Fecha_Realizacion','Estatus_Seguimiento'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
