import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  formulario!: FormGroup;

  constructor(private router: Router, 
    private httpService: HttpService,
    private formBuilder: FormBuilder ){}


    ngOnInit() {
      this.formLogin = this.formBuilder.group({
        nombreU: ['',[Validators.required]],
        password: ['',[Validators.required]]
       })
       this.formulario=this.formBuilder.group({
        NuevaC: ['', [Validators.required]],
        correo: ['', [Validators.required]]
       })
       localStorage.setItem("Bandera","1");
     }

     
     aceptar(){

       let correo =this.formulario.value.correo;
       let NuevaC=this.formulario.value.NuevaC;
       this.httpService.cambiarC(correo,NuevaC).subscribe(()=>{

       this.cerrarVentanaEmergente();
       })
     }


     

login(){
  this.httpService.iniciarSesion(this.formLogin.value.nombreU,this.formLogin.value.password).subscribe((data: any)=> {
    if(data== 0){
      // alert("usuario no existe");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se encuentra ninguna cuenta asociada a este nombre de usuario.',
       
      })
      localStorage.setItem("Bandera","1");
    }else{
      if(data==2){
        
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Contraseña incorrecta',
         
        })
        // alert("contraseña incorrecta");
        localStorage.setItem("Bandera","0");
      }else
      
      {
       
        localStorage.setItem("Nombre_Usuario",data.Nombre_Usuario);
        localStorage.setItem("Id_Usuario", data.Id_Usuario);
        localStorage.setItem("Id_Tipo_Usuario", data.Id_Tipo_Usuario);
        localStorage.setItem("Id_Socio", data.Id_Socio);
        localStorage.setItem("Id_Tipo_Plan", data.Id_Tipo_Plan);
        localStorage.setItem("Bandera","1");
        this.httpService.setGlobalVariable(true);
        this.router.navigate(["/index"]);
      }
    }
  });
}

registro(){
  this.router.navigate(["/registro"]);
}

isLoggedIn: boolean = false;


@ViewChild('ventanaEmergente') ventanaEmergente: any;

abrir(){
  if(this.isLoggedIn){
    
  }
  else{
    this.abrirVentanaEmergente();
  }
}

abrirVentanaEmergente(): void {
  this.ventanaEmergente.nativeElement.style.display = 'block';
}

cerrarVentanaEmergente(): void {
  this.ventanaEmergente.nativeElement.style.display = 'none';
}



home(){
  this.router.navigate(['/web']);
 }






}
