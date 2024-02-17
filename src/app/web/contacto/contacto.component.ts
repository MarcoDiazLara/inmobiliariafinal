import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private httpService: HttpService) { }
  formContacto !: FormGroup;

  ngOnInit(): void {
    this.formContacto = this.formBuilder.group({
      nombre:['',[Validators.required]],
      correo:['',[Validators.required]],
      comentario:['',[Validators.required]]
    })

  }
  Enviar() {
    if (this.formContacto && this.formContacto.valid) {
      let mensaje = "Nombre: " + this.formContacto.value.nombre + "\nCorreo: " + this.formContacto.value.correo + "\nComentario: " + this.formContacto.value.comentario;

      this.httpService.EnviarCorreo(this.httpService.getcorreo(), mensaje).subscribe((data: any) => {
        Swal.fire(
          'Exitosamente!',
          'Se ha enviado el correo',
          'success'
        );
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Rellena todos los campos',
       
      })
    }
  
      // Muestra una alerta si el formulario no es válido
      // alert('Por favor, complete todos los campos obligatorios.');
    }
  }
  // Enviar(){
    
  //   let mensaje = "Nombre: "+ this.formContacto.value.nombre + "\nCorreo: " + this.formContacto.value.correo + "\nComentario: "+ this.formContacto.value.comentario;
  //   this.httpService.EnviarCorreo("marko_lar@hotmail.com",mensaje).subscribe((data: any)=>{
  //     Swal.fire(
  //       'Exitosamente!',
  //       'Se ha enviado el correo',
  //       'success'
        
  //     )
  //   })

  // }


