import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';
import Swal from 'sweetalert2';
import { detallesdelInmueble } from 'src/app/services/Interface/Interfaces';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-autorizar',
  templateUrl: './autorizar.component.html',
  styleUrls: ['./autorizar.component.scss']
})
export class AutorizarComponent implements OnInit { 
  formGeneral!:FormGroup;

  detalles!: detallesdelInmueble ;
  Nombre_Inmueble !:string;
  Descripcion_Inmueble!:string;
  Calle !:string; 
  Num_Int !:string;
  Num_Ext !:string;
  Terrenometros!: string;
  construccion!: string ;
  recamaras!: string;
  banos!: string;
  pisos!:string;
  antiguedad!:string;
  acabados!:string;
  gimnasio!:string;
  estacionamiento!:string;
  jardin!:string;
  alberca!:string;
  cocina!:string;
  roof!:string;
  Precio_Min!:string;
  Precio_Max!:string;
  Precio_Final!:string;
  id_publicacion: any;
  


  

  constructor(private httpService: HttpService, public dialogRef: MatDialogRef<AutorizarComponent> ,
    private dialog:MatDialog, private formBuilder: FormBuilder) { }
  imagen1: any;
  imagen2: any;
  imagen3: any;
  imagen4: any;
  imagen5: any;


  id!: any;
  correo!:any;
  nombre!:any;

  

  ngOnInit(): void {

    this.formGeneral = this.formBuilder.group({
      
      Nombre_Inmueble: ['',[Validators.required]],
      Descripcion_Inmueble: ['',[Validators.required]],
      Calle: ['',[Validators.required]],
      Num_Int: ['',[Validators.required]],
      Num_Ext: ['',[Validators.required]],
      Terrenometros: ['',[Validators.required]],
      Construccion: ['',[Validators.required]],
      Numero_de_recamaras: ['',[Validators.required]],
      Numero_de_baños: ['',[Validators.required]],
      Numero_de_pisos: ['',[Validators.required]],
      Años_de_Antiguedad: ['',[Validators.required]],
      Acabados: ['',[Validators.required]],
      Gimnasio: ['',[Validators.required]],
      Estacionamiento: ['',[Validators.required]],
      Jardin: ['',[Validators.required]],
      Cocina_Integral: ['',[Validators.required]],
      Alberca: ['',[Validators.required]],
      Roof_Garden: ['',[Validators.required]],
      Precio_Min: ['',[Validators.required]],
      Precio_Max: ['',[Validators.required]],
      Precio_Final: ['',[Validators.required]],
  })
    this.httpService.infousuInmu(localStorage.getItem("idpublicacion")).subscribe((data:any)=>{
      this.id = data[0].Id_Usuario;
      this.correo = data[0].Email;
      this.nombre = data[0].Nombre_Inmueble;
    })
    this.httpService.getImagenes(localStorage.getItem("idpublicacion")).subscribe((data: any)=>{
      this.imagen1 = data[0].Picture1;
      this.imagen2 = data[0].Picture2;
      this.imagen3 = data[0].Picture3;
      this.imagen4 = data[0].Picture4;
      this.imagen5 = data[0].Picture5;

    })

    let Id_Inmueble = localStorage.getItem('idpublicacion');
    
    this.httpService.mostrarDetallesInmueble(Id_Inmueble).subscribe((data:any)=>{
    
      this.detalles = data[0];
      this.Nombre_Inmueble = this.detalles.Nombre_Inmueble;
      this.Descripcion_Inmueble = this.detalles.Descripcion_Inmueble;
      this.Calle = this.detalles.Calle;
      this.Num_Int = this.detalles.Num_Int;
      this.Num_Ext = this.detalles.Num_Ext;
      this.Terrenometros= this.detalles.Terreno_M2;
      this.construccion= this.detalles.Construccion_M2;
      this.recamaras= this.detalles.Recamara;
      this.banos=this.detalles.Bano;
      this.pisos=this.detalles.Num_Pisos;
      this.antiguedad=this.detalles.Antiguedad;
      this.acabados=this.detalles.Acabados;
      this.gimnasio=this.detalles.Gimnasio;
      this.estacionamiento=this.detalles.Estacionamiento;
      this.jardin=this.detalles.Jardin;
      this.alberca=this.detalles.Alberca;
      this.cocina=this.detalles.Cocina_Integral;
      this.roof=this.detalles.Roof_Garden;
      this.Precio_Min=this.detalles.Precio_Min;
      this.Precio_Max =this.detalles.Precio_Max;
      this.Precio_Final =this.detalles.Precio_Final;
      
      });


    
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
   
  CerraDialogo(){
   this.dialog.closeAll();

   }

  autorizar(){

    

    this.httpService.autorizarInum(localStorage.getItem("idpublicacion")).subscribe((data:any)=>{

      let mensaje = "El usuario: " + localStorage.getItem("Nombre_Usuario") + " ha aceptado las imagenes del inmueble: "+ this.nombre + ", ya es publico el inmueble";

      this.httpService.Notis(mensaje, this.id,localStorage.getItem("idpublicacion"),5).subscribe((data:any)=>{
        
      })

      this.httpService.EnviarCorreo(this.correo, mensaje).subscribe((data:any)=>{

      })
      Swal.fire(
        'Exitosamente!',
        'El inmueble ahora es publico',
        'success'

      )
    })
    this.CerraDialogo();
  }
  denegar(){
    
    
    
    let mensaje = "La informacion que proporcionaste para el inmueble: " + this.nombre + ", no cumplen con las reglas de calidad del portal, favor de dar de alta nuevamente el inmueble. \nAtte. Equipo InmobeWise";
    
    this.httpService.eliminarInmu(localStorage.getItem("idpublicacion")).subscribe((data:any)=>{
      this.httpService.EnviarCorreo(this.correo,mensaje).subscribe((data:any)=>{
        this.CerraDialogo();
      })
    })


  }

 
}
