import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { HttpService } from 'src/app/services/http/http.service';
import { SolicitudCambio } from 'src/app/services/Interface/Interfaces';
import Swal from 'sweetalert2';

interface valores{
  value: string,
  viewvalue:string
}
@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {

  formGeneral!: FormGroup;

  solicitud: SolicitudCambio[] = [];
  ArrayAsignacion: any[] = [];
  tipoCita: valores[] = [
  {value:"Completada", viewvalue:"Completada"},
  {value:"Cancelada", viewvalue:"Cancelada"}
]

idusu:any;



  constructor(
    private formBuilder: FormBuilder,
    // private dialog: MatDialog,
    private httpService: HttpService,

  ) { }

 

  ngOnInit(): void {
    let Id_Socio = localStorage.getItem("Id_Usuario");
    
    this.httpService.inventarioAsesor(Id_Socio).subscribe((data: any) => {
      this.solicitud = data;
      
    });


    this.formGeneral = this.formBuilder.group({
      Inmueble: ['', [Validators.required]],
      Fecha: ['', [Validators.required]],
      motivosolicitud: ['', [Validators.required]],
      estado:['',[Validators.required]],
      nombre:['',Validators.required]
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
  nombreinmu:any;
  nombreinmu2:any;
  correo: any;
  obtenerValores(event: MatSelectChange) {
    const nombrePublicacionSeleccionada = event.value;
    const solicitudSeleccionada = this.solicitud.find(solict => solict.Nombre_Inmueble === nombrePublicacionSeleccionada);
    if (solicitudSeleccionada) {
        this.id = solicitudSeleccionada.Id_Inmueble;
        this.nombreinmu = solicitudSeleccionada.Nombre_Inmueble;
        // Realiza las acciones que necesites con nombrePublicacionSeleccionada y otroValor
        
    }
    this.httpService.infousuInmu(this.id).subscribe((data:any)=>{
      this.idusu = data[0].Id_Usuario;
      this.correo = data[0].Email;
      this.nombreinmu2 = data[0].Nombre_Inmueble;
    });
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
      let estado = this.formGeneral.value.estado;
      let nombuser = this.formGeneral.value.nombre;
      let mensaje = "La cita para el inmueble: "+ this.nombreinmu + " a sido: " + estado + " para el usuario: " + nombuser + " en la fecha: " + nom_aux
      + " Motivo del cliente: " + motivosolicitud;
    


      this.httpService.Notis(mensaje, this.idusu, this.id,"6").subscribe((resp: any) => {

        Swal.fire({
          title: "Exito!",
          text: "Tu cita ha sido enviada",
          icon: "success"
        });
        this.formGeneral.reset();

      })

    }this.httpService.closeDialog(); 

  }

}
