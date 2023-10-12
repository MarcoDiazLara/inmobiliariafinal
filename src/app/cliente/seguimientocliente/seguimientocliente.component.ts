import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface PeriodicElement {
  Picture1: string;
  Id_Seguimiento: number;
  Prospecto_Interesado: string;
  Fecha_Realizacion: number;
  Estatus_Seguimiento:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Id_Seguimiento: 1, Picture1: 'casa3.png', Prospecto_Interesado: 'Juan Carlos', Fecha_Realizacion: 23032023,Estatus_Seguimiento:'proceso'},
  {Id_Seguimiento: 2, Picture1: 'casita.png', Prospecto_Interesado: 'Juan Carlos', Fecha_Realizacion: 23032023,Estatus_Seguimiento:'completado'},
  {Id_Seguimiento: 3, Picture1: 'cocina.png', Prospecto_Interesado: 'Juan Carlos', Fecha_Realizacion: 23032023,Estatus_Seguimiento:'pendiente'},
];

@Component({
  selector: 'app-seguimientocliente',
  templateUrl: './seguimientocliente.component.html',
  styleUrls: ['./seguimientocliente.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule
  ],
})
export class SeguimientoclienteComponent implements OnInit {

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
