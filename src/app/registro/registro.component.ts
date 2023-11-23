import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http/http.service';

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
      p_contrasena: ['',[Validators.required]],
      p_correo: ['',[Validators.required]],
      p_tel_fijo: ['',[Validators.required]],
      p_cel: ['',[Validators.required]],
     })
  }

  Registro(){
    let p_nombres1 = this.formRegistro.value.p_nombres;
    let p_a_paterno1 =  this.formRegistro.value.p_a_paterno;
    let p_a_materno1 = this.formRegistro.value.p_a_materno;
    let p_nom_usuario1 = this.formRegistro.value.p_nom_usuario;
    let p_contrasena1 =  this.formRegistro.value.p_contrasena;
    let p_correo1 =  this.formRegistro.value.p_correo;
    let p_tel_fijo1 =  this.formRegistro.value.p_tel_fijo;
    let p_cel1 =  this.formRegistro.value.p_cel;
    this.httpService.registroCompleto(p_nombres1,p_a_paterno1,p_a_materno1,p_nom_usuario1,p_contrasena1
      ,p_correo1,p_tel_fijo1,p_cel1).subscribe((data: any)=>{
      if(data == 0){
        alert("Error al insertar usuario");
      }else{
        if(data == 2){
          alert("Error al insertar informacion");
        }else{
          this.router.navigate(['/login']);
        }
      }
    })
  }
  home(){
    this.router.navigate(['/web']);
   }
}
