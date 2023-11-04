import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import Swal from 'sweetalert2';


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
  Enviar(){
    
    let mensaje = "Nombre: "+ this.formContacto.value.nombre + "\nCorreo: " + this.formContacto.value.correo + "\nComentario: "+ this.formContacto.value.comentario;
    this.httpService.EnviarCorreo("marko_lar@hotmail.com",mensaje).subscribe((data: any)=>{
      Swal.fire(
        'Exitosamente!',
        'Se ha enviado el correo',
        'success'
        
      )
    })

  }

}
