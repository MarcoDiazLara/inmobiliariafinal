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
  terreno!: string;
  construccion!: string ;
  recamaras!: string;
  baños!: string;
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
      this.terreno= this.detalles.Terreno_M2;
      this.construccion= this.detalles.Construccion_M2;
      

      
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
