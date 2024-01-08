import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { sendCorreo } from 'src/app/services/Interface/Interfaces';
import { VentanacitaComponent } from '../ventanacita/ventanacita.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import Swal from 'sweetalert2';



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
  esFavorito: boolean = false;

  toggleFavorito() {
    
    if(this.isLoggedIn){
      console.log("Id _ usuario"+ localStorage.getItem("Id_Usuario")+ "Id_Inmueble" + this.id_inmueble);
      this.httpService.Favoritos(localStorage.getItem("Id_Usuario"), this.id_inmueble,"1").subscribe((data : any) =>{
        if(data == 1){
          this.esFavorito = !this.esFavorito;
        Swal.fire({
      
          icon: 'success',
          title: 'Se ha agregado a tus favoritos',
         
        })}else{
          Swal.fire('Este inmueble, ya se encuentra en tus favoritos');
        }
      })
      
      } else{
        Swal.fire('Inicia sesion para poder guardar favoritos');
      } 
  }

  isLoggedIn: boolean= false;




public Venta: Boolean = false;





  vista_360 !: string;
  id_inmueble!: string;
  id_usuario!: String;
  tpropiedad!: Number;
  ubicacion!: String;
  bandera!: number;
  tipoP!: number;

  tipo !: String;


  ngOnInit(): void {
     this.isLoggedIn=this.httpService.getGlobalVariable();

    this.route.queryParams.subscribe(params => {
      this.id_inmueble = params['id_inmueble'];
      this.id_usuario = params['id_usuario'];
      this.tpropiedad = params['tpropiedad'];
      this.ubicacion = params['ubicacion'];
      this.bandera = params['bandera'];
      this.tipoP = params['tipoP'];
    
    });

    this.httpService.mostrarDetalles(this.id_usuario,this.id_inmueble).subscribe((resp: any)=>{
    this.details = resp[0];
    this.imagenPrincipalUrl = this.details.Picture1;
    this.imagen1 = this.details.Picture1;
    this.imagen2 = this.details.Picture2;
    this.imagen3 = this.details.Picture3;
    this.imagen4 = this.details.Picture4;
    this.imagen5 = this.details.Picture5;
    this.tipo = this.details.Id_Tipo_Publicacion;
    this.vista_360 = this.details[360];
  
   

     if(this.tipo == "1" || this.tipo == "3"){
        this.Venta = !this.Venta;
     }

     this.imagenesCarrusel = [
      this.imagen1,
      this.imagen2,
      this.imagen3,
      this.imagen4,
      this.imagen5,
    ];
      
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

    if(this.isLoggedIn){
      
      this.httpService.validarlikes(localStorage.getItem("Id_Usuario"),this.id_inmueble).subscribe((data:any)=>{
        console.log(data);
        if(data == 1){
          this.esFavorito = !this.esFavorito;
        }
      })
    }
    

  }
  imagen1 !: string;
  imagen2 !: string;
  imagen3 !: string;
  imagen4 !: string;
  imagen5 !: string;
  
  details !: infoInmuebles;
  imagenesCarrusel: any[] = [
    
  ];

  imagenPrincipalUrl: string ="";

  cambiarImagen(imagenUrl: string) {
    this.imagenPrincipalUrl = imagenUrl;
  }
  
   abrirAplicacion() {
    // Intenta abrir la aplicación
    window.location.href = "pouapp://";

    // Si no se puede abrir, redirige a la tienda de aplicaciones
    setTimeout(function() {
        window.location.href = "https://play.google.com/store/apps/details?id=me.pou.app";
    }, 500);
}
  
  verificacion(){
    let navegador = navigator.userAgent;
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
         // window.location.href = this.route2.data['https://play.google.com/store/apps/details?id=me.pou.app'];
         //window.open("https://play.google.com/store/apps/details?id=me.pou.app")
         this.abrirAplicacion();
        } else {
            Swal.fire(
              
              // 'Para usar esta funcion utiliza tu dispositivo movil',
              // icon: 'info'
               "Información",
  "Para usar esta funcion utiliza tu dispositivo movil",
  "info"
              
            )
        }
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
    
    let correo = this.details.Email;
    let mensaje = `Hola, soy ${this.nombre}. Mi número de teléfono es ${this.telefono}. Mi correo electrónico es ${this.email}. Comentario: ${this.comentarios}. URL: ${window.location.href} `;
    this.httpService.EnviarCorreo(correo,mensaje).subscribe((data: any) =>{
      let mensaje2 = `${this.nombre}` + " te ha enviado un correo, con el correo: " + `${this.email}`
      
      this.httpService.Notis(mensaje2, this.id_usuario ).subscribe((data:any)=>{

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

  enviarWhatsApp() {
   
    if (!this.nombre || !this.telefono || !this.email) {
      Swal.fire('Por favor complete todos los campos obligatorios antes de enviar el formulario.');
  } else{
      
      const numeroTelefono = this.details.Contacto_Principal;
      const mensaje = `Hola, soy ${this.nombre}. Mi número de teléfono es ${this.telefono}. Mi correo electrónico es ${this.email}. Comentario: ${this.comentarios}. URL: ${window.location.href} `;
      let mensaje2 = `${this.nombre}` + " te ha enviado un WhatsApp, con el numero: " + `${this.telefono}`
      const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
      this.httpService.Notis(mensaje2, this.id_usuario ).subscribe((data:any)=>{

      })
  
       // Abre la URL de WhatsApp en una nueva ventana
      window.open(urlWhatsApp, '_blank');
  }

  }





  

  constructor( private router:Router, private httpService:HttpService, private route: ActivatedRoute, public dialog: MatDialog) { }

  openDialog(): void {
    
      localStorage.setItem("Publicacion",this.details.Id_Publicacion);
      localStorage.setItem("Publicador", this.details.Id_Usuario);
      const dialogRef = this.dialog.open(VentanacitaComponent, {

      });
      
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
    

  }
  


Favoritos(){
  if(this.isLoggedIn){
  console.log("Id _ usuario"+ localStorage.getItem("Id_Usuario")+ "Id_Inmueble" + this.id_inmueble);
  this.httpService.Favoritos(localStorage.getItem("Id_Usuario"), this.id_inmueble,"1").subscribe((data : any) =>{
    if(data == 1){
    
    Swal.fire({
  
      icon: 'success',
      title: 'Se ha agregado a tus favoritos',
     
    })}else{
      this.httpService.borrarlikes(localStorage.getItem("Id_Usuario"),this.id_inmueble).subscribe((data: any)=>{
        this.esFavorito = !this.esFavorito;
        Swal.fire('Este inmueble se quito de sus favoritos');
      })
      
    }
  })
  
  } else{
    Swal.fire('Inicia sesion para poder guardar favoritos');
  } 
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




