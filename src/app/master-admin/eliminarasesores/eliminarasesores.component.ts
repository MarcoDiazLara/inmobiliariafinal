import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eliminarasesores',
  templateUrl: './eliminarasesores.component.html',
  styleUrls: ['./eliminarasesores.component.css']
})
export class EliminarasesoresComponent implements OnInit {

  searchTerm: string = '';
  asesores: any[] = [
    { nombre: 'Asesor 1' },
    { nombre: 'Asesor 2' },
    { nombre: 'Asesor 3' }
  ];
  confirmacionVisible: boolean = false;
  asesorSeleccionado: any;

  buscarAsesor() {
    // Agregar lógica de búsqueda aquí
  }

  mostrarConfirmacion(asesor: any) {
    this.confirmacionVisible = true;
    this.asesorSeleccionado = asesor;
  }

  eliminarAsesor() {
    // Agregar lógica de eliminación aquí
    this.confirmacionVisible = false;
  }

  cancelarEliminar() {
    this.confirmacionVisible = false;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
