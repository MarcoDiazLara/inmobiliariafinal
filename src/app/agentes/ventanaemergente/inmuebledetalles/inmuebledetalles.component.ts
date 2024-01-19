import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { detallesdelInmueble } from 'src/app/services/Interface/Interfaces';
import { HttpService } from 'src/app/services/http/http.service';
@Component({
  selector: 'app-inmuebledetalles',
  templateUrl: './inmuebledetalles.component.html',
  styleUrls: ['./inmuebledetalles.component.scss']
})
export class InmuebledetallesComponent implements OnInit {

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

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private http:HttpService,
  ) { }

  ngOnInit(): void {

    let Id_Inmueble = localStorage.getItem('Id_Inmueble');
    
    this.http.mostrarDetallesInmueble(Id_Inmueble).subscribe((data:any)=>{
    
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


}

closeDialog(){
  this.dialog.closeAll();
}

}
