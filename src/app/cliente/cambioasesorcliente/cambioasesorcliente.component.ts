import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { SolicitudCambio } from 'src/app/services/Interface/Interfaces';

// Alerta

import Swal from 'sweetalert2';


@Component({
  selector: 'app-cambioasesorcliente',
  templateUrl: './cambioasesorcliente.component.html',
  styleUrls: ['./cambioasesorcliente.component.scss']


})
export class CambioasesorclienteComponent implements OnInit {

  formGeneral!: FormGroup;

  solicitud: SolicitudCambio[] = [];
  ArrayAsignacion:any[]=[];
 

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
   obtenerIdSocioUsuario(){
    let IdSocio = localStorage.getItem("Id_Socio");
    this.httpService.SolicitudCambioA(17).subscribe((data: any) => {
  
    
          this.obtener = data.IdSocUsu;
          // alert(data.IdSocUsu);
          console.log(data)
          
    
          });

   }


  Guardardatos() {


    if (this.formGeneral) {

      let Inmueble = this.formGeneral.value.Inmueble;
      let Fecha = this.formGeneral.value.Fecha;
      let motivocliente = this.formGeneral.value.motivocliente;
      let mensaje = motivocliente + "Inmueble: " + Inmueble + "Fecha: " + Fecha;


      

      // this.httpService.SolicitudCambioA(IdSocio).subscribe((data: any) => {
      
  //  this.ArrayAsignacion = data ;
  //     this.ArrayAsignacion.forEach(element => {
  //       let IdUsuSocio = element.IdSocUsu;
  //      localStorage.setItem("IdSocUsu", IdUsuSocio);
  //     } );

        // let Id_Usu = "IdSocUsu";
        // localStorage.setItem("IdSocUsu", Id_Usu );
        // console.log(Id_Usu);

      // let Id_Usu = data.IdSocUsu;
      // alert(data.IdSocUsu);
      // localStorage.setItem("IdSocUsu", Id_Usu);


        // let Id_Usua = "2000";
        // localStorage.setItem("2000", Id_Usua );
        // console.log('2000', Id_Usua);


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
