import { Component, OnInit, ViewChild } from '@angular/core';
import   Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { InfoinmuebleComponent } from '../ventanaemergente/infoinmueble/infoinmueble.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-cargadeinmuebles',
  templateUrl: './cargadeinmuebles.component.html',
  styleUrls: ['./cargadeinmuebles.component.scss']
})
export class CargadeinmueblesComponent implements OnInit {

  selectedFiles: File[] = [];
  formGeneral!: FormGroup;
  // 
  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  @ViewChild('fileInput') fileInput: any;

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }
  downloadFile(): void {
  
    const urlWhatsApp = "https://inmobiliaria.arvispace.com/servicios/Inmuebles.csv";
  

     // Abre la URL de WhatsApp en una nueva ventana
    window.open(urlWhatsApp, '_blank');
    // const url = window.URL.createObjectURL(this.selectedFile);
    // const a = document.createElement('a');
    // document.body.appendChild(a);
    // a.href = "https://inmobiliaria.arvispace.com/servicios/dataCliente.csv";
    // a.download = this.selectedFile.name;
    // a.click();
    // window.URL.revokeObjectURL("https://inmobiliaria.arvispace.com/servicios/dataCliente.csv");

}
serverUrl: string = 'https://inmobiliaria.arvispace.com/servicios/CargaMasivaInmuebles.php';
constructor(
  private https: HttpClient,
  private httpService: HttpService,
  private formBuilder: FormBuilder,
  public dialog: MatDialog
) { }
ngOnInit(): void {
  this.formGeneral = this.formBuilder.group({
    descarga: ['', [Validators.required]],
  });
}

handleFileInput(event: any) {
  this.selectedFiles = event.target.files;
  console.log(this.selectedFiles);
  this.uploadFile();

}
async uploadFile() {
  this.httpService.openasesor();

  if (this.selectedFiles.length > 0) {
    const formData = new FormData();

    formData.append('dataCliente', this.selectedFiles[0]);
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

  const dialogRef = this.dialog.open(InfoinmuebleComponent, {
    width: '80vh',
    height: 'auto',
    disableClose: true
  });
}
}