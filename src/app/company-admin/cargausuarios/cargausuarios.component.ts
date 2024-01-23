import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog} from '@angular/material/dialog';
import { IdusuarioComponent } from '../ventanaemergente/idusuario/idusuario.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cargausuarios',
  templateUrl: './cargausuarios.component.html',
  styleUrls: ['./cargausuarios.component.scss']
})

export class CargausuariosComponent implements OnInit {
  selectedFiles: File[] = [];
  serverUrl: string = 'https://inmobiliaria.arvispace.com/Armenda/backendArmenda/ser_carga_masiva.php';

  constructor(
    private httpService: HttpService,
    private https: HttpClient,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {}

  handleFileInput(event: any) {
    this.selectedFiles = event.target.files;
  }

  async uploadFile() {
    this.httpService.openasesor();

    if (this.selectedFiles.length > 0) {
      const formData = new FormData();

      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append('dataCliente[]', this.selectedFiles[i]);
      }

      this.https.post(this.serverUrl, formData).subscribe(
        async (response) => {
          console.log('Respuesta del servidor:', response);
          this.httpService.closeDialog();
          Swal.fire({
            title: "Exito",
            text: "Archivo CSV Cargado Exitosamente",
            icon: "success"
          });
          // Manejar la respuesta del servidor si es necesario
        },
        async (error) => {
          console.error('Error en la solicitud POST:', error);
          this.httpService.closeDialog();
          Swal.fire({
            icon: "error",
            text: "Ocurrio un error al querer cargar archivo CSV",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
          // Manejar el error de la solicitud POST si es necesario
        }
      );
    } else {
      this.httpService.closeDialog();
      Swal.fire(
        'Aviso!',
        'No se ha seleccionado un archivo CSV.',
        'info'
      )
      // Manejar el caso donde no se ha seleccionado ningún archivo
    }
  }

  openid() {

    const dialogRef = this.dialog.open(IdusuarioComponent, {
      width: '60vh',
      height: 'auto',
      disableClose: true
    });
  }
}
