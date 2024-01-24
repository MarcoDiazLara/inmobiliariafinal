import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { infoAsesor } from 'src/app/services/Interface/Interfaces';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mi-asesor',
  templateUrl: './mi-asesor.component.html',
  styleUrls: ['./mi-asesor.component.scss']
})
export class MiAsesorComponent implements OnInit {

  datosAsesor!: infoAsesor;
  datos2!:infoAsesor;
  formGeneral!: FormGroup;
  state: boolean = true;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGeneral = this.formBuilder.group({
      nombre:["",[Validators.required]],
      apellidopaterno: ["",[Validators.required]],
      apellidomaterno: ["",[Validators.required]],
      email: ["",[Validators.required]],
      contactoprincipal: ["",[Validators.required]],
      Socio: ["",[Validators.required]],
      p_desc:["",[Validators.required]]
    })
    this.httpService.obtenerinfoAsesor(localStorage.getItem("Id_Usuario")).subscribe((data:any)=>{
      console.log(data);
      if(data != "0"){
        this.datosAsesor = data[0];
        this.datos2 = data[0];
      }else{
          
          this.httpService.infoAsesordueno(localStorage.getItem("Id_Socio")).subscribe((data1: any)=>{
            this.datosAsesor = data1[0];
            this.datos2 = data1[0];
          })
      }
        
      
    })
  }


  enviarWhatsApp() {
      const numeroTelefono = this.datos2.Contacto_Principal;
      const mensaje = this.formGeneral.value.p_desc;
     
      const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
    
  
       // Abre la URL de WhatsApp en una nueva ventana
      window.open(urlWhatsApp, '_blank');
  }

  enviarCorreo(){
    
    let correo = this.formGeneral.value.email;
    let mensaje = this.formGeneral.value.p_desc;
    console.log(correo + mensaje);
    //let mensaje = `Hola, soy ${this.nombre}. Mi número de teléfono es ${this.telefono}. Mi correo electrónico es ${this.email}. Comentario: ${this.comentarios}. URL: ${window.location.href} `;
    this.httpService.EnviarCorreo(correo,mensaje).subscribe((data: any) =>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Enviado',
        showConfirmButton: false,
        timer: 1500
      })
    })
   

  }

  }



