import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { sendCorreo } from 'src/app/services/Interface/Interfaces';
import { VentanacitaComponent } from '../ventanacita/ventanacita.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';



import { infoInmuebles } from 'src/app/services/Interface/Interfaces';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
  
 

  
})
export class DetallesComponent implements OnInit {
  


  ngOnInit(): void {
    

    this.route.queryParams.subscribe(params => {
     

     
      this.id_inmueble = params['id_inmueble'];
      this.id_usuario = params['id_usuario'];

    });

    this.httpService.mostrarDetalles(this.id_usuario,this.id_inmueble).subscribe((resp: any)=>{
      this.details = resp[0];
     this.imagen1 = this.details.Picture1;
     this.imagen2 = this.details.Picture2;
      console.log(this.imagen2);
    })

    const shareButton = document.querySelectorAll<HTMLButtonElement>("button.shareButton");

    shareButton[0].addEventListener("click", (e) => {
      for (let i = 0; i < shareButton.length; i++) {
        shareButton[i].classList.toggle("open");
        shareButton[0].classList.remove("sent");
      }
    });

    for (let i = 1; i < shareButton.length; i++) {
      shareButton[i].addEventListener("click", (e) => {
        for (let i = 0; i < shareButton.length; i++) {
          shareButton[i].classList.toggle("open");
        }
        shareButton[0].classList.toggle("sent");
      });
    }


    

  }
  imagen1 !: string;
  imagen2 !: string;
  details !: infoInmuebles;
  imagenesCarrusel: any[] = [
    "https://inmobiliaria.arvispace.com/imagenes/6.jpg",
    this.imagen1,
    this.imagen2
    // this.details.Picture1,
    // this.details.Picture2,
    // this.details.Picture3,
    // this.details.Picture4,
    // this.details.Picture5
  ];

  imagenPrincipalUrl: string = 'assets/img/Houses-bro.png';

  cambiarImagen(imagenUrl: string) {
    this.imagenPrincipalUrl = imagenUrl;
  }


  nombre: string = '';
  telefono: string = '';
  email: string = '';
  comentarios: string = 'Hola, buenas tardes me interesa esta propiedad y quisiera ponerme en contacto con usted para poder agendar una fecha y hora para visitar dicha propiedad.';

  nom_inmu: string = "";
  enviarCorreo(){
    let id="36";
    this.httpService.EnviarCorreo(id).subscribe((data:any)=>{
      console.log(data);
      


    });

 

  }

  enviarWhatsApp() {
    let id="36";
    this.httpService.EnviarCorreo(id).subscribe((data:any)=>{
      console.log(data.Contacto_Principal);
      
      const numeroTelefono = data.Contacto_Principal;
      const mensaje = `Hola, soy ${this.nombre}. Mi número de teléfono es ${this.telefono}. Mi correo electrónico es ${this.email}. Comentario: ${this.comentarios}. URL: ${window.location.href} `;
  
      const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
  
       // Abre la URL de WhatsApp en una nueva ventana
      window.open(urlWhatsApp, '_blank');

    });
  }





  

  constructor( private router:Router, private httpService:HttpService) { }
  
  back(){
    this.router.navigate(["/inmueble/vista"]);
  }

  ngOnInit(): void {
    const shareButton = document.querySelectorAll<HTMLButtonElement>("button.shareButton");

    shareButton[0].addEventListener("click", (e) => {
      for (let i = 0; i < shareButton.length; i++) {
        shareButton[i].classList.toggle("open");
        shareButton[0].classList.remove("sent");
      }
    });

    for (let i = 1; i < shareButton.length; i++) {
      shareButton[i].addEventListener("click", (e) => {
        for (let i = 0; i < shareButton.length; i++) {
          shareButton[i].classList.toggle("open");
        }
        shareButton[0].classList.toggle("sent");
      });
    }


    

  }

  

}




