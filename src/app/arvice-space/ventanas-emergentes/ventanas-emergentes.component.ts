import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http/http.service';
@Component({
  selector: 'app-ventanas-emergentes',
  templateUrl: './ventanas-emergentes.component.html',
  styleUrls: ['./ventanas-emergentes.component.scss']
})
export class VentanasEmergentesComponent {
  //seleccionar imagen android
  selectedArchiveAndroid!: FileList;
  //seleccionar imagen iphone
  selectedArchive2IOS!: FileList;

  constructor(private httpService: HttpService, private dialog: MatDialog, private httpClient: HttpClient) { }

  closeDialog(): void {
    this.dialog.closeAll();
  }
  // proceso para insertar achivos y ruta la base de datos
  //-------------------Asignar archivos seleccionados a variables globales-----------------------------------------------------
  onFileChange(event: any): void {
    this.selectedArchiveAndroid = event.target.files;
    this.selectedArchive2IOS = event.target.files;
  }
  //------------------------------------------------------------------------------------
  //------------metodo para subir archivos al servidor -----------------------------
  subir_imagenes(): void {
    const formDataAndroid = new FormData();
    const formDataIOS = new FormData();
    for (let i = 0; i < this.selectedArchiveAndroid.length; i++) {
      formDataAndroid.append('images[]', this.selectedArchiveAndroid[i]);
    }

    for (let i = 0; i < this.selectedArchive2IOS.length; i++) {
      formDataIOS.append('images[]', this.selectedArchive2IOS[i]);
    }

    this.httpClient.post('https://inmobiliaria.arvispace.com/servicios/ser_subirArchvosAndroid.php', formDataAndroid)
      .subscribe((response) => {
        console.log(response);
      });
    this.httpClient.post('https://inmobiliaria.arvispace.com/servicios/ser_subirArchvosIOS.php', formDataIOS)
      .subscribe((response) => {
        console.log(response);
      });
  }
  //--------------------------------------------------------------------------------------------------
  //----------------validar si los inputs estan vacios----------------------------------------------
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
      //logica para insertar al sevidor y rutas a la base de datos 

    }
  }
  //----------------------------------------------------------------------------------------------

  subirArchivo() {
    let date = new Date();
    this.subirArchivo();

    let dia = date.getDate();
    let dia1 = date.getDate().toString();;
    if (dia < 10) {
      dia1 = "0" + dia1;
    }
    let mes = (date.getMonth() + 1);
    let mes1 = (date.getMonth() + 1).toString();
    if (mes < 10) {
      mes1 = "0" + mes1;
    }
    let anio = date.getFullYear().toString();
    let nom_aux = anio + mes1 + dia1;
    let rutaUno = "https://inmobiliaria.arvispace.com/imagenes/" + nom_aux + this.selectedArchiveAndroid[0].name;
    let rutaDos = "https://inmobiliaria.arvispace.com/imagenes/" + nom_aux + this.selectedArchive2IOS[0].name;
    let idInmueble = localStorage.getItem("idInmuebleArviceSpace");
    this.httpService.insertarArchivoArvice(idInmueble, rutaUno, rutaDos).subscribe((data: any) => {

      if (data == 1) {


      } else {


      }
    })
  }

}
