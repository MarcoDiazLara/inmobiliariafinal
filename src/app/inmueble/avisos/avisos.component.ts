import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { LikeComponent } from '../like/like.component';
import { MenuinmuebleComponent } from '../menuinmueble/menuinmueble.component';
import { InformacioninmuebleComponent } from '../informacioninmueble/informacioninmueble.component';
import {ThemePalette} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Publicaciones } from 'src/app/services/Interface/Interfaces';
import { HttpService } from 'src/app/services/http/http.service';
import { Inmuebles } from 'src/app/services/Interface/Interfaces';
import { P } from '@fullcalendar/core/internal-common';
import { FormGroup, FormControl } from '@angular/forms';
import { Requisitos3dComponent } from '../requisitos3d/requisitos3d.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss'],
  
  // standalone: true,
  // imports: [MatButtonModule, MatDialogModule, MenuinmuebleComponent],
})


export class AvisosComponent  {
  opciones = ['Opción 1', 'Opción 2', 'Opción 3'];
  opcionSeleccionada: string = '';
  isChecked: boolean = false;
  inmuebles: Inmuebles[] =[];
  inmueble!: Inmuebles;
  inmuebleSelecionado!:Publicaciones;
  inmuebles1: Publicaciones[] = [];

  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });
  showTipoAnuncio: boolean = false;
  showEstadoAnuncio: boolean = false;
  showPropiedad: boolean = false;

 
  constructor(public dialog: MatDialog,private _formBuilder: FormBuilder, private httpService: HttpService ) {}
  openDialog( inmueble:Publicaciones){
    localStorage.setItem("p_Id_inmueble",inmueble.Id_Inmueble);
    const dialogRef = this.dialog.open(LikeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  InforInmu(inmueble:Publicaciones){
    localStorage.setItem("p_Id_inmueble",inmueble.Id_Inmueble);
    const dialogRef = this.dialog.open(InformacioninmuebleComponent,{


    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });


  }

ngOnInit(){
  this.obtenerDatosInmuebles();
  this.httpService.obtenerPublis(localStorage.getItem("Id_Usuario")).subscribe((data:any) =>{
    this.inmuebles1 = data;
  })
}
  
  mostrarTabla = false;

  toggleTabla() {
    this.mostrarTabla = !this.mostrarTabla;
  }
    
  mostrarFormulario = false;

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }
  obtenerDatosInmuebles(){
    this.httpService.tipoInmueble().subscribe((resp:any)=>{
     if(resp !== 201){
      
       this.inmueble = resp[0].id_Tipo_Inmueble;
       this.inmuebles = resp;
     }
    },(err)=>{
     console.log(err);
    })
   }

   toggleTestadoAnuncio(){
    this.showTipoAnuncio = !this.showTipoAnuncio;
     // Cierra los otros elementos
 
  }
  toggleEstadoAnuncio(){
    this.showEstadoAnuncio = !this.showEstadoAnuncio;

  }
  togglePropiedad(){
    this.showPropiedad = !this.showPropiedad;
    // Cierra los otros elementos
  
  }
  tipoAnuncios(tipoA:number){
   this.httpService.filtrosmiespacio(localStorage.getItem("Id_Usuario"),tipoA).subscribe((data:any)=>{
    this.inmuebles1=data;
   })
  }
estadoAnuncion(Anuncio:number){
  this.httpService.filtroEstadoAnuncio(localStorage.getItem("Id_Usuario"),Anuncio).subscribe((data:any)=>{
    this.inmuebles1=data;
  })
}

TipoInmueble(tiposInmuebles:number){
  this.httpService.FiltroTipodeInmueble(localStorage.getItem("Id_Usuario"),tiposInmuebles).subscribe((data:any)=>{
    this.inmuebles1=data;
    console.log("hola");
  })
 

  

}
openDialog2(inmueble:Publicaciones): void {
 
  this.httpService.verificarmodelado2miespacio(inmueble.Id_Inmueble).subscribe((data:any)=>{
    if(data == "0"){
      localStorage.setItem("p_Id_inmueble",inmueble.Id_Inmueble);
      this.dialog.open(Requisitos3dComponent, {
      });
    }else{
      Swal.fire({
        title: "Exito",
        text: "Ya haz solicitado el modelado en 3D!",
        icon: "success"
      });
    }
  })
 
}
}
    
//   this.httpService.filtroEstadoAnuncio(localStorage.getItem("Id_Usuario"),Anuncio).subscribe((data:any)=>{
// this.inmuebles1=data;
//   })







