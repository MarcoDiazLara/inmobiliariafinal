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
  Nombre_Publicacion !: string;
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
 
  
  id_publicacion: any;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private http:HttpService,
  ) { }

  ngOnInit(): void {

    let id_publicacion = localStorage.getItem('idpublicacion');
    
    this.http.mostrarDetallesInmueble(id_publicacion).subscribe((data:any)=>{
      
      
      this.detalles = data[0];
      this.Nombre_Publicacion = this.detalles.Nombre_Publicacion;
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
      this.roof=this.detalles.Roof_Garden
      
      });


    this.formGeneral = this.formBuilder.group({
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
  })



}

closeDialog(){
  this.dialog.closeAll();
}

}
