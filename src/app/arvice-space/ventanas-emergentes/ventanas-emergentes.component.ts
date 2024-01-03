import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ventanas-emergentes',
  templateUrl: './ventanas-emergentes.component.html',
  styleUrls: ['./ventanas-emergentes.component.scss']
})
export class VentanasEmergentesComponent {

  constructor(private dialog: MatDialog) { }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  verificarInputFilesVacios(inputFile1: HTMLInputElement, inputFile2: HTMLInputElement): void {
    const files1 = inputFile1.files;
    const files2 = inputFile2.files;

    if ((!files1 || files1.length === 0) || (!files2 || files2.length === 0)) {
      console.log('Al menos uno de los input type file está vacío o no se han seleccionado archivos.');
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Campos requeridos, favor de seleccionar ambos archivos!",

      });
    } else {
      console.log('Se ha seleccionado al menos un archivo en ambos campos.');
    }
  }
}
