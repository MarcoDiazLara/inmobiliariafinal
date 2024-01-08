import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup, } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder } from '@angular/forms';
import { infoUsuario } from 'src/app/services/Interface/Interfaces';
import Swal from 'sweetalert2';
import { DuenopasswordComponent } from '../ventanaemergente/duenopassword/duenopassword.component';

@Component({
  selector: 'app-perfildueno',
  templateUrl: './perfildueno.component.html',
  styleUrls: ['./perfildueno.component.scss']
})


export class PerfilduenoComponent implements OnInit {
  saludo: string = '';

  // ngOnInit() {
  //   // const fecha = new Date();
  //   // const hora = fecha.getHours();

  //   // if (hora >= 0 && hora < 12) {
  //   //   this.saludo = '¡Buenos días!';
  //   // } else if (hora >= 12 && hora < 18) {
  //   //   this.saludo = '¡Buenas tardes!';
  //   // } else {
  //   //   this.saludo = '¡Buenas noches!';
  //   // }
  // }
  
  datos!: infoUsuario;
  imagen !: string;
  
  formPerfil!: FormGroup;
  constructor(public dialog: MatDialog,
    private httpService: HttpService,
    private formBuilder: FormBuilder) {}
 
    openpassword (){
    
    const dialogRef = this.dialog.open(DuenopasswordComponent,{
      width: '60vh',
      height: 'auto',
      disableClose: true
    });
  }
  
  openDialog(): void {
    
  }
 

  ngOnInit(): void {

    this.obtenerInfo();
    this.formPerfil = this.formBuilder.group({
      nombre:['',[Validators.required]],
      apellidopaterno:['',[Validators.required]],
      apellidomaterno:['',[Validators.required]],
      curp:['',[Validators.required]],
      rfc:['',[Validators.required]],
      contactoprincipal:['',[Validators.required]],
      contactoemergencia:['',[Validators.required]],
      email:['',[Validators.required]],
      imageInput:['',[Validators.required]],
    });
  }

  obtenerInfo(){
    this.httpService.obtenerInfoUsuario(localStorage.getItem("Id_Usuario")).subscribe((data : any) =>
    {if(data ==201){
      // alert("Error al leer usuario");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al leer usuario',
       
      })
    }else{
      this.datos = data;
      
    }})

    this.httpService.obtenerInfoUsuario2(localStorage.getItem("Id_Usuario")).subscribe((data: any) =>{
      this.imagen = data.Img_Profile;
      
    })
  }

  actualizar(){
    if (this.formPerfil) {
      let id = localStorage.getItem("Id_Usuario");
      let nombre = this.formPerfil.value.nombre;
      let apellidopaterno = this.formPerfil.value.apellidopaterno;
      let apellidomaterno = this.formPerfil.value.apellidomaterno;
      let curp = this.formPerfil.value.curp;
      let rfc = this.formPerfil.value.rfc;
      let contactoprincipal = this.formPerfil.value.contactoprincipal;
      let contactoemergencia = this.formPerfil.value.contactoemergencia;
      let email = this.formPerfil.value.email;
      let nombreusuario = localStorage.getItem("Nombre_Usuario");
      let imageInput = this.formPerfil.value.imageInput;
  //id , nombre , apellidopaterno , apellidomaterno , curp , rfc ,  contactoprincipal , contactoemergencia ,  email ,  nombreusuario , imageInput
      this.httpService.updateInfoUsuario(id , nombre , apellidopaterno , apellidomaterno , curp , rfc ,  contactoprincipal , contactoemergencia ,  email ,  nombreusuario ).subscribe((data : any)=>{
        if(data ==1){
          //alert("Se actualizo usuario");
          Swal.fire(
            'Exitosamente!',
            'Se actualizo usuario',
            'success'
            
          )
        }else{
          //alert("Error al actualizar");
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error al actualizar',
           
          })
        }
      })
  }
}

}


 



