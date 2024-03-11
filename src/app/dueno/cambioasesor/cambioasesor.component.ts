import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { HttpService } from 'src/app/services/http/http.service';
import { SolicitudCambio } from 'src/app/services/Interface/Interfaces';

// Alerta

import Swal from 'sweetalert2';

@Component({
  selector: 'app-cambioasesor',
  templateUrl: './cambioasesor.component.html',
  styleUrls: ['./cambioasesor.component.scss']
})


export class CambioasesorComponent implements OnInit {

  formGeneral!: FormGroup;

  solicitud: SolicitudCambio[] = [];
  ArrayAsignacion: any[] = [];


  constructor(
    private formBuilder: FormBuilder,
    // private dialog: MatDialog,
    private httpService: HttpService,

  ) { }



  ngOnInit(): void {
    let Id_Socio = localStorage.getItem("Id_Usuario");
    
    this.httpService.MostrarInmueblesSolicitud(Id_Socio).subscribe((data: any) => {
      this.solicitud = data;
      
    });


    this.formGeneral = this.formBuilder.group({
      Inmueble: ['', [Validators.required]],
      Fecha: ['', [Validators.required]],
      motivosolicitud: ['', [Validators.required]]
    });
  }

  obtener: any;
  obtenerIdSocioUsuario() {
    let IdSocio = localStorage.getItem("Id_Socio");
    this.httpService.SolicitudCambioA(IdSocio).subscribe((data: any) => {


      this.obtener = data[0].IdSocUsu;
      
      // alert(data.IdSocUsu);
      


    });

  }
  id!: any;
  obtenerValores(event: MatSelectChange) {
    const nombrePublicacionSeleccionada = event.value;
    const solicitudSeleccionada = this.solicitud.find(solict => solict.Nombre_Publicacion === nombrePublicacionSeleccionada);
    if (solicitudSeleccionada) {
        this.id = solicitudSeleccionada.Id_Inmueble;
        // Realiza las acciones que necesites con nombrePublicacionSeleccionada y otroValor
    }
}


  Guardardatos() {
    this.httpService.openasesor(); 

    if (this.formGeneral) {

      let Inmueble = this.formGeneral.value.Inmueble;
      let Fecha = this.formGeneral.value.Fecha;

      let dia = Fecha.getDate();
      let dia1 = Fecha.getDate().toString();
      if (dia < 10) {
        dia1 = "0" + dia1;
      }

      let mes = (Fecha.getMonth()+1);
      let mes1 = (Fecha.getMonth()+1).toString();
      if(mes < 10){
        mes1 = "0"+mes1;
      }
      let anio = Fecha.getFullYear().toString();
      let nom_aux =  anio +"/"+ mes1 +"/" + dia1
      ;

      let motivosolicitud = this.formGeneral.value.motivosolicitud;
      let mensaje = "Cambio de Asesor: " + motivosolicitud + " Inmueble: " + Inmueble + " Fecha: " + nom_aux;
    

      this.httpService.Notis(mensaje, this.obtener, this.id,"2").subscribe((resp: any) => {

        Swal.fire({
          title: "Exito!",
          text: "Tu Solicitud ha sido enviada",
          icon: "success"
        });

      })

    }this.httpService.closeDialog(); 

  }
}

