import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { BrokerpasswordComponent } from '../brokerpassword/brokerpassword.component';
import { infoUsuario } from 'src/app/services/Interface/Interfaces';
import { HttpService } from 'src/app/services/http/http.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-perfilbrokers',
  templateUrl: './perfilbrokers.component.html',
  styleUrls: ['./perfilbrokers.component.css']
})
export class PerfilbrokersComponent implements OnInit {
  saludo: string = '';

  ngOnInit() {
    const fecha = new Date();
    const hora = fecha.getHours();

    if (hora >= 0 && hora < 12) {
      this.saludo = '¡Buenos días!';
    } else if (hora >= 12 && hora < 18) {
      this.saludo = '¡Buenas tardes!';
    } else {
      this.saludo = '¡Buenas noches!';
    }
  }
  
  datos!: infoUsuario;
  imagen !: string;
  
  formPerfil!: FormGroup;
  constructor(public dialog: MatDialog,
    private httpService: HttpService,
    private formBuilder: FormBuilder) {}
 
    openpassword (){
    
    const dialogRef = this.dialog.open(BrokerpasswordComponent,{
      width: '60vh',
      height: 'auto',
      disableClose: true
    });
  }
  
  openDialog(): void {
    
  }
 

  // ngOnInit(): void {

  //   this.obtenerInfo();
  //   this.formPerfil = this.formBuilder.group({
  //     nombre:['',[Validators.required]],
  //     apellidopaterno:['',[Validators.required]],
  //     apellidomaterno:['',[Validators.required]],
  //     curp:['',[Validators.required]],
  //     rfc:['',[Validators.required]],
  //     contactoprincipal:['',[Validators.required]],
  //     contactoemergencia:['',[Validators.required]],
  //     email:['',[Validators.required]],
  //     imageInput:['',[Validators.required]],
  //   });
  // }

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
