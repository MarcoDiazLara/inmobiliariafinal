import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
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
    let Id_Socio = localStorage.getItem("Id_Socio");
    console.log(Id_Socio)
    this.httpService.MostrarInmueblesSolicitud(Id_Socio).subscribe((data: any) => {
      this.solicitud = data;
      console.log(this.solicitud);
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
    this.httpService.SolicitudCambioA(17).subscribe((data: any) => {


      this.obtener = data[0].IdSocUsu;
      // alert(data.IdSocUsu);
      // console.log(data[0].IdSocUsu)


    });

  }


  Guardardatos() {


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
      let mensaje = motivosolicitud + "Inmueble: " + Inmueble + "Fecha: " + nom_aux;


      this.httpService.Notis(mensaje, this.obtener).subscribe((resp: any) => {

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Tu Solicitud ha sido enviada",
          showConfirmButton: false,
          timer: 1500
        });

      })





    }

  }
}

