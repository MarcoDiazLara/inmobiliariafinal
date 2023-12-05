import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http/http.service';
import { AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formRegistro!:FormGroup;

//p_nombres,p_a_paterno,p_a_materno,p_nom_usuario,p_contrasena,p_correo,p_tel_fijo,p_cel

  constructor(private router: Router,
    
    private httpService: HttpService,
    private formBuilder: FormBuilder){}
  ngOnInit(){
    this.formRegistro = this.formBuilder.group({
      p_nombres: ['',[Validators.required]],
      p_a_paterno: ['',[Validators.required]],
      p_a_materno: ['',[Validators.required]],
      p_nom_usuario: ['',[Validators.required]],
      p_contrasena: ['',[Validators.required, this.validarContrasena]],
      p_correo: ['',[Validators.required, Validators.email]],
      p_tel_fijo: ['',[Validators.required]],
      p_cel: ['',[Validators.required]],
     })
  }

  Registro(){
    if (this.formRegistro.valid) {
    let p_nombres1 = this.formRegistro.value.p_nombres;
    let p_a_paterno1 =  this.formRegistro.value.p_a_paterno;
    let p_a_materno1 = this.formRegistro.value.p_a_materno;
    let p_nom_usuario1 = this.formRegistro.value.p_nom_usuario;
    let p_contrasena1 =  this.formRegistro.value.p_contrasena;
    let p_correo1 =  this.formRegistro.value.p_correo;
    let p_tel_fijo1 =  this.formRegistro.value.p_tel_fijo;
    let p_cel1 =  this.formRegistro.value.p_cel;
    let pcorreo = this.formRegistro.get('p_correo');
    this.httpService.registroCompleto(p_nombres1,p_a_paterno1,p_a_materno1,p_nom_usuario1,p_contrasena1
      ,p_correo1,p_tel_fijo1,p_cel1).subscribe((data: any)=>{
      if(data == 0){
        alert("Error al insertar usuario");
      }else{
        if(data == 2){
          alert("Error al insertar informacion");
        }else{
          this.httpService.EnviarCorreo(p_correo1,"Bienvenido a InmobeWise. \n Hola, "+ p_nombres1 + " ya puedes usar nuestros servicios. \n Saludos del equipo de InmobeWise.").subscribe((data:any)=>{
            this.router.navigate(['/login']);
          })
          
        }
      }
    })
  }
  else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Rellena todos los campos',
     
    })
  }
  }
  home(){
    this.router.navigate(['/web']);
   }

   validarContrasena(control: AbstractControl | null): { [key: string]: boolean } | null {
    if (!control) {
      return null;
    }
    const value = control.value;

    // Verifica la longitud mínima
    if (value.length < 8) {
      return { minLength: true };
    }

    // Verifica la presencia de al menos un número
    if (!/\d/.test(value)) {
      return { requireNumber: true };
    }

    // Verifica la presencia de al menos una letra
    if (!/[a-zA-Z]/.test(value)) {
      return { requireLetter: true };
    }
    if (!/[A-Z]/.test(value)) {
      return { requireUppercase: true };
    }


    return null; // La contraseña es válida
  }

  validarTelefono(control: AbstractControl | null): { [key: string]: boolean } | null {
    if (!control) {
      return null;
    }
    const value = control.value;

    // Verifica que tenga exactamente 10 dígitos
    if (!/^\d{10}$/.test(value)) {
      return { invalidPhone: true };
    }

    return null; // El teléfono es válido
  }

  get f() {
    return this.formRegistro.controls;
  }
}
