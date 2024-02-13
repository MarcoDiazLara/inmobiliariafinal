import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-autorizar',
  templateUrl: './autorizar.component.html',
  styleUrls: ['./autorizar.component.scss']
})
export class AutorizarComponent implements OnInit {
  

  constructor(private httpService: HttpService, public dialogRef: MatDialogRef<AutorizarComponent> ,
    private dialog:MatDialog,) { }
  imagen1: any;
  imagen2: any;
  imagen3: any;
  imagen4: any;
  imagen5: any;


  id!: any;
  correo!:any;
  nombre!:any;

  

  ngOnInit(): void {
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

      this.httpService.Notis(mensaje, this.id,localStorage.getItem("idpublicacion"),2).subscribe((data:any)=>{
        
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
    
    
    
    let mensaje = "Las imagenes que proporcionaste para el inmueble: " + this.nombre + ", no cumplen con las reglas de calidad del portal, favor de dar de alta nuevamente el inmueble. \n Atte. Equipo InmobeWise";
    
    this.httpService.eliminarInmu(localStorage.getItem("idpublicacion")).subscribe((data:any)=>{
      this.httpService.EnviarCorreo(this.correo,mensaje).subscribe((data:any)=>{
        this.CerraDialogo();
      })
    })


  }

 
}
