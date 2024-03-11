import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { HttpService } from 'src/app/services/http/http.service';
import { ActulizarInmueble } from 'src/app/services/Interface/Interfaces';
import { EstatusInmueble } from 'src/app/services/Interface/Interfaces';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-informacion-inmueble',
  templateUrl: './informacion-inmueble.component.html',
  styleUrls: ['./informacion-inmueble.component.scss']
})
export class InformacionInmuebleComponent implements OnInit {

  @Output() cerrado: EventEmitter<void> = new EventEmitter<void>();

  cerrarModal() {
    // Lógica para cerrar el modal
    
  }

  opciones = ['Opción 1', 'Opción 2', 'Opción 3'];
  opcionSeleccionada: string = '';
  EstatusInmuebles: EstatusInmueble[] = [];
  EstatusInmueble!: EstatusInmueble;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  // -----------------------------------------
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder, private httpService: HttpService, private dialog: MatDialog,) { }
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
  options!: FormGroup;

  id: any;
  correo: any;
  nombreinmu: any;

  ngOnInit(): void {
    this.ObtenerEstatusInmueble();
    this.ObtenerinformacionInmueble();

    this.httpService.infousuInmu(localStorage.getItem("idpublicacion")).subscribe((data:any)=>{
      this.id = data[0].Id_Usuario;
      this.correo = data[0].Email;
      this.nombreinmu = data[0].Nombre_Inmueble;
    });

    this.options = this._formBuilder.group({
      Nombre_de_Inmueble: ['', [Validators.required]],
      Descripcion: ['', [Validators.maxLength(300)]],
      // Descripcion: ['', [Validators.required]],
      Calle: ['', [Validators.required]],
      No_Interior: ['', [Validators.required]],
      No_Exterior: ['', [Validators.required]],
      Terreno: ['', [Validators.required]],
      Construccion: ['', [Validators.required]],
      Recamaras: ['', [Validators.required]],
      Banos: ['', [Validators.required]],
      Cocina_Integral: ['', [Validators.required]],
      Numero_Pisos: ['', [Validators.required]],
      Antiguedad: ['', [Validators.required]],
      Acabados: ['', [Validators.required]],
      Alberca: ['', [Validators.required]],
      Jardin: ['', [Validators.required]],
      GYM: ['', [Validators.required]],
      RoofGarden: ['', [Validators.required]],
      Estacionamiento: ['', [Validators.required]],
      Precio_Maximo: ['', [Validators.required]],
      Precio_Minimo: ['', [Validators.required]],
      Precio_Final: ['', [Validators.required]],
      pId_Estatus_Inmueble: ['', [Validators.required]],
    });
  }
  datos!: ActulizarInmueble;
  ObtenerinformacionInmueble() {
    this.httpService.actualizarInmueble(localStorage.getItem("idpublicacion")).subscribe((data: any) => {
      this.datos = data[0];
     
    })
  }

  ObtenerEstatusInmueble() {
    this.httpService.estatusPublicacionInmueble().subscribe((resp: any) => {
      if (resp !== 201) {
        this.EstatusInmueble = resp[0].Id_Estatus_Publicacion;
        this.EstatusInmuebles = resp;
      }
    }, (err) => {
      
    })
  }


  CerraDialogo() {
    this.dialog.closeAll();
  
  }

  Actulizar() {
    let nombre = this.options.value.Nombre_de_Inmueble;
    let Descripcion = this.options.value.Descripcion;
    let Calle = this.options.value.Calle;
    let No_Interior = this.options.value.No_Interior;
    let No_Exterior = this.options.value.No_Exterior;
    let terreno = this.options.value.Terreno;
    let construccion = this.options.value.Construccion;
    let recamaras = this.options.value.Recamaras;
    let Banos = this.options.value.Banos;
    let cocina = this.options.value.Cocina_Integral;
    let pisos = this.options.value.Numero_Pisos;
    let antiguedad = this.options.value.Antiguedad;
    let acabados = this.options.value.Acabados;
    let alberca = this.options.value.Alberca;
    let jardin = this.options.value.Jardin;
    let gym = this.options.value.GYM;
    let garden = this.options.value.RoofGarden;
    let estacionamiento = this.options.value.Estacionamiento;
    let usuario = localStorage.getItem("Id_Usuario");
    let inmueble = localStorage.getItem("idpublicacion")
    let prec_min = this.options.value.Precio_Minimo;
    let prec_max = this.options.value.Precio_Maximo;
    let prec_final = this.options.value.Precio_Final;
    let estatus = this.options.value.pId_Estatus_Inmueble;

    // console.log("nombre: "+nombre+" Descripcion: "+  Descripcion+" Calle: " +Calle+ "No_Interior: "+No_Interior+
    // "No_Exterior :"+No_Exterior+"terreno: "+terreno+"construccion: "+construccion +"recamaras:"+recamaras+"Banos: "+ Banos+
    // "cocina: "+ cocina+"pisos: "+pisos+"antiguedad: "+antiguedad+ "acabados: "+ acabados+"alberca: "+ alberca+
    // "jardin: "+jardin+"gym: " + gym +"garden: "+ garden+"estacionamiento: "+ estacionamiento+ "usuario: "+ usuario+
    // "inmueble"+ inmueble+ "prec_min: " +prec_min+  "prec_max: "+ prec_max+  "prec_final: " + prec_final+
    // "estatus: " + estatus)  

    this.httpService.actualizarInformacionInmueble(nombre, Descripcion, Calle, No_Interior, No_Exterior, terreno, construccion, recamaras,
      Banos, cocina, pisos, antiguedad, acabados, alberca, jardin, gym, garden, estacionamiento, usuario, inmueble, prec_min, prec_max, prec_final,
      estatus).subscribe((data: any) => {
        let mensaje;
        let estadoaux;
        if (data == 1) {
            if(estatus == 6 || estatus == 7){

              this.EstatusInmuebles.forEach(estado => {
                if(estado.Id_Estatus_Publicacion == estatus){
                    estadoaux = estado.Estatus_Publicacion;
                }
              });
              mensaje = "El inmueble: "+ this.nombreinmu+" ha sido actualizado al estado: "+estadoaux +", por el usuario: " + localStorage.getItem("Nombre_Usuario");
              this.httpService.Notis(mensaje,this.id,inmueble,"5").subscribe((data:any)=>{

              })
              
            }else{
              mensaje = "El inmueble: "+ this.nombreinmu+" ha sido actualizado por el usuario: " + localStorage.getItem("Nombre_Usuario");
              this.httpService.Notis(mensaje,this.id,inmueble,"2").subscribe((data:any)=>{

              })
            }

          
          
          Swal.fire(
            'Exitosamente!',
            'Se ha actualizado la informacion',
            'success'

          )

          // alert("Se actualizo correctamente");
        } else {
          //alert(":(");
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: ':(',

          })
        }
      })
    this.CerraDialogo();
  }


}
