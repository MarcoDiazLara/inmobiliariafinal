import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { sendCorreo } from 'src/app/services/Interface/Interfaces';
import { VentanacitaComponent } from '../ventanacita/ventanacita.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { informacionAsesorAsignado } from 'src/app/services/Interface/Interfaces';
import { infoInmuebles } from 'src/app/services/Interface/Interfaces';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  esFavorito: boolean = false;
  asesor!: informacionAsesorAsignado;
  entradaAsesor : boolean = false;

  
  isLoggedIn: boolean= false;




public Venta: Boolean = false;

Id_real!: string;


  vista_360 !: string;
  id_inmueble!: any;
  id_usuario!: any;
  tpropiedad!: Number;
  ubicacion!: String;
  bandera!: number;
  tipoP!: number;
  nombreinmu!: string;

  tipo !: String;


  ngOnInit(): void {
     this.isLoggedIn=this.httpService.getGlobalVariable();

     this.id_usuario = localStorage.getItem("id_usu2");
     this.id_inmueble = localStorage.getItem("id_inmu2");

  

    this.httpService.mostrarDetalles(this.id_usuario,this.id_inmueble).subscribe((resp: any)=>{
     
    this.details = resp[0];
  
    this.Id_real = this.details.Id_Inmueble;
    
    this.tipo = this.details.Id_Tipo_Publicacion;
    this.nombreinmu = this.details.Nombre_Inmueble;
  

    if(this.isLoggedIn){

      this.httpService.validahistorial(localStorage.getItem("Id_Usuario"),this.Id_real).subscribe((data:any)=>{
        if(data == 0){
          this.httpService.insertahistorial(localStorage.getItem("Id_Usuario"),this.Id_real).subscribe((data:any)=>{
            
          })
        }
      })
   
    

    this.httpService.informacionAsesor(this.Id_real).subscribe((data:any)=>{
      console.log(data);
      if(data != "0"){
        this.asesor = data[0];
        this.entradaAsesor = !this.entradaAsesor;
      }
    })
  
   
  }
     
      
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
  
  
  details !: infoInmuebles;
 

  imagenPrincipalUrl: string ="";

  cambiarImagen(imagenUrl: string) {
    this.imagenPrincipalUrl = imagenUrl;
  }
  
  
  
 

  nombre: string = '';
  telefono: string = '';
  email: string = '';
  comentarios: string = 'Hola, buenas tardes me interesa esta propiedad y quisiera ponerme en contacto con usted para poder agendar una fecha y hora para visitar dicha propiedad.';

  nom_inmu: string = "";


  enviarCorreo(){
    if (!this.nombre || !this.telefono || !this.email) {
      Swal.fire('Por favor complete todos los campos obligatorios antes de enviar el formulario.');
  } else{
    //Para mandar la notificacion al dueño y al asesor asignado
    if(this.entradaAsesor){
      let correo = this.details.Email;
    let mensaje = `Hola, soy ${this.nombre}. Mi número de teléfono es ${this.telefono}. Mi correo electrónico es ${this.email}. Comentario: ${this.comentarios}. Nombre inmueble: `+this.nombreinmu;
    this.httpService.EnviarCorreo(this.asesor.Email,mensaje).subscribe((data: any) =>{
      let mensaje2 = `${this.nombre}` + " te ha enviado un correo, con el correo: " + `${this.email}`
      let mensaje3 =  "Se han comunicado con tu Asesor para pedir informacion sobre tu inmueble. \n Atte. Equipo InmobeWise"

      this.httpService.insertarContactados(this.asesor.Id_Usuario,this.Id_real).subscribe((data:any)=>{

      })
      
      this.httpService.Notis(mensaje3, this.id_usuario, this.Id_real,"4").subscribe((data:any)=>{

      })
      this.httpService.Notis(mensaje2, this.asesor.Id_Usuario, this.Id_real,"3").subscribe((data:any)=>{

      })

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Enviado',
        showConfirmButton: false,
        timer: 1500
      })
    })
    }else{
    let correo = this.details.Email;
    let mensaje = `Hola, soy ${this.nombre}. Mi número de teléfono es ${this.telefono}. Mi correo electrónico es ${this.email}. Comentario: ${this.comentarios}. Nombre Inmueble: `+ this.nombreinmu;
    this.httpService.EnviarCorreo(correo,mensaje).subscribe((data: any) =>{
      let mensaje2 = `${this.nombre}` + " te ha enviado un correo, con el correo: " + `${this.email}`;
      
      this.httpService.insertarContactados(this.id_usuario,this.Id_real).subscribe((data:any)=>{
        
      })
      
      this.httpService.Notis(mensaje2, this.id_usuario, this.Id_real,"3").subscribe((data:any)=>{

      })

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

  }

  enviarWhatsApp() {
   
    if (!this.nombre || !this.telefono || !this.email) {
      Swal.fire('Por favor complete todos los campos obligatorios antes de enviar el formulario.');
  } else{

    if(this.entradaAsesor){
      const numeroTelefono = this.asesor.Contacto_Principal;
      const mensaje = `Hola, soy ${this.nombre}. Mi número de teléfono es ${this.telefono}. Mi correo electrónico es ${this.email}. Comentario: ${this.comentarios}. Nombre Inmueble: `+this.nombreinmu;
      let mensaje2 = `${this.nombre}` + " te ha enviado un WhatsApp, con el numero: " + `${this.telefono}`
      const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
      let mensaje3 =  "Se han comunicado con tu Asesor para pedir informacion sobre tu inmueble. \n Atte. Equipo InmobeWise"
      
      this.httpService.insertarContactados(this.asesor.Id_Usuario,this.Id_real).subscribe((data:any)=>{
        
      })
      this.httpService.Notis(mensaje2, this.asesor.Id_Usuario, this.Id_real,"3").subscribe((data:any)=>{

      })
      this.httpService.Notis(mensaje3, this.id_usuario, this.Id_real,"4").subscribe((data:any)=>{

      })
  
       // Abre la URL de WhatsApp en una nueva ventana
      window.open(urlWhatsApp, '_blank');
  
    }else{
      
      const numeroTelefono = this.details.Contacto_Principal;
      const mensaje = `Hola, soy ${this.nombre}. Mi número de teléfono es ${this.telefono}. Mi correo electrónico es ${this.email}. Comentario: ${this.comentarios}. Nombre Inmmueble: `+this.nombreinmu;
      let mensaje2 = `${this.nombre}` + " te ha enviado un WhatsApp, con el numero: " + `${this.telefono}`
      const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
      this.httpService.insertarContactados(this.id_usuario,this.Id_real).subscribe((data:any)=>{
        
      })
      this.httpService.Notis(mensaje2, this.id_usuario, this.Id_real,"3").subscribe((data:any)=>{

      })
  
       // Abre la URL de WhatsApp en una nueva ventana
      window.open(urlWhatsApp, '_blank');
  }
}

  }





  

  constructor( private router:Router, private httpService:HttpService, private route: ActivatedRoute, public dialog: MatDialog) { }

  openDialog(): void {
    
      localStorage.setItem("Publicacion",this.details.Id_Publicacion);
      localStorage.setItem("inmue", this.Id_real);
      localStorage.setItem("Publicador", this.details.Id_Usuario);
      const dialogRef = this.dialog.open(VentanacitaComponent, {

      });
      
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
    

  }
  







  back(){
    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action': 'compra', 'tpropiedad': this.tpropiedad, 'ubicacion': this.ubicacion, 'bandera': this.bandera, 'tipoP': this.tipoP}});
  }
 // URL y texto que se compartirá
 compartirUrl = window.location.href;
 compartirTexto = '¡Echa un vistazo a este increíble contenido!';

 // Función para compartir en Twitter
 compartirEnTwitter() {
   const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.compartirUrl)}&text=${encodeURIComponent(this.compartirTexto)}`;
   this.abrirVentanaEmergente(twitterUrl);
 }

 // Función para compartir en Facebook
 compartirEnFacebook() {
   const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.compartirUrl)}`;
   this.abrirVentanaEmergente(facebookUrl);
 }

 // Función para abrir una ventana emergente
 abrirVentanaEmergente(url: string) {
   window.open(url, '_blank', 'width=600,height=400');
 }
   

}
