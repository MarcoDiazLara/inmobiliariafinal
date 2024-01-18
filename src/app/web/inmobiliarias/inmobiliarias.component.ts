import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { inmobiliaria } from 'src/app/services/Interface/Interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inmobiliarias',
  templateUrl: './inmobiliarias.component.html',
  styleUrls: ['./inmobiliarias.component.css']
})
export class InmobiliariasComponent implements OnInit {
  isLoggedIn: boolean = false;
  @ViewChild('ventanaEmergente') ventanaEmergente: any;

  inmobiliarias: inmobiliaria[] = [];
  inmobiliariaSeleccionada!: inmobiliaria;
  fecha: any;
  aux:any;
  formGeneral!: FormGroup;

  abrir(inmobiliaria: inmobiliaria){
    this.inmobiliariaSeleccionada = inmobiliaria;
    this.fecha = inmobiliaria.Created_Date;
    
      this.abrirVentanaEmergente();
    
  }

  abrirVentanaEmergente(): void {
    this.ventanaEmergente.nativeElement.style.display = 'block';
  }

  cerrarVentanaEmergente(): void {
    
    this.ventanaEmergente.nativeElement.style.display = 'none';
  }





  constructor(private httpService: HttpService, private formBuilder: FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.formGeneral = this.formBuilder.group({
      Email: ['',[Validators.required]],
      Nombre: ['',[Validators.required]],
      Telefono: ['',[Validators.required]],
      Mensaje: ['',[Validators.required]],

    })
    this.httpService.mostrarInmobiliarias().subscribe((data : any)=> {
      this.inmobiliarias = data;
    })
  }
  Enviar() {
    if (this.formGeneral.valid) {
      let message = "Nombre: " + this.formGeneral.value.Nombre + "\nEmail: " + this.formGeneral.value.Email + "\nTelefono: " + this.formGeneral.value.Telefono + "\nMensaje: " + this.formGeneral.value.Mensaje;
      
      this.httpService.EnviarCorreo(this.inmobiliariaSeleccionada.Email, message).subscribe((data: any) => {
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
      // Angular ya maneja la validación, por lo que este bloque raramente se ejecutará si el formulario está configurado correctamente.
      // alert('Por favor, completa todos los campos obligatorios correctamente.');
    }
  }
  
  
  // Enviar(){
  //   // console.log("Email: "+ this.formGeneral.value.Email + "Nombre: "+ this.formGeneral.value.Nombre+ "Mensaje: " + this.formGeneral.value.Mensaje+ "Telefono: "+ this.formGeneral.value.Telefono);
  //   let message = "Nombre: " + this.formGeneral.value.Nombre + "\nEmail: "+ this.formGeneral.value.Email + "\nTelefono: "+ this.formGeneral.value.Telefono + "\n Mensaje: " + this.formGeneral.value.Mensaje;
  //   this.httpService.EnviarCorreo(this.inmobiliariaSeleccionada.Email, message).subscribe((data: any)=>{
  //     Swal.fire(
  //       'Exitosamente!',
  //       'Se ha enviado el correo',
  //       'success'
        
  //     )
  //   })
  // }



