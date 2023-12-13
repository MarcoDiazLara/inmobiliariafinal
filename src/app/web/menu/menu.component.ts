import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


 
  isLoggedIn: boolean = false;

 

  constructor(private router: Router,private httpService: HttpService){
 
  }

  ngOnInit() {
    this.isLoggedIn = this.httpService.getGlobalVariable();
  }

  Login(){
    
    this.router.navigate(['/login']);

 }
 contactos(){

  this.router.navigate(['web/contacto']);

 }
 Guiarentar(){

  this.router.navigate(['web/Guiarentar']);

 }



 directo(){
  this.router.navigate(['web/particula']);

 }
 corredor(){
  this.router.navigate(['web/Inmobiliariacorredor']);
 }


 desarrolo(){
  this.router.navigate(['web/Constructoradesarrolladora']);


 }

 blog(){
  this.router.navigate(['web/blog']);

 }

 home(){
  this.router.navigate(['/web']);
 }







 cerrar(){
  //this.httpService.setGlobalVariable(false);
  const itemsToRemove =[
    "Nombre_Usuario",
    "Id_Usuario",
    "Id_Tipo_Usuario"
  ];
  itemsToRemove.forEach( item => {
    localStorage.removeItem(item);
  })
  this.httpService.setGlobalVariable(false);
  this.router.navigate(["/web"]);
 }


 
  @ViewChild('ventanaEmergente') ventanaEmergente: any;

  abrir(){
    if(this.isLoggedIn){
      this.router.navigate(["/inmueble/inmueble"]);
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

  Editar(){
    this.router.navigate(["cliente/cliente/Perfil"]),{ replaceUrl: true };
  }

  Panel(){
    let entrada = localStorage.getItem("Id_Tipo_Usuario");
    if(entrada == "6" || entrada == "1"){
      this.router.navigate(["/superUsuario/perfil"]);
    }else if (entrada == "2"){
      this.router.navigate(["/usuario/perfil"]);
    }else if (entrada == "3"){
      this.router.navigate(["/asesor/Perfil"]);
    }else if( entrada == "4"){
      this.router.navigate(["cliente/cliente/Perfil"]);
    }else if ( entrada == "5" || entrada == "10"){
      this.router.navigate(["/Company/Perfil"]);
    }
  }
 // Inmueble 
  Espacio(){
    this.router.navigate(['inmueble/avisos']);
  }
  
  RemateHipotecario(){

    this.router.navigate(['web/Remate']);
  
   }
   EvitaFraude(){
    this.router.navigate(['web/EvitaFraude']);
   }
   Quierescomprar(){
    this.router.navigate(['web/QuieresComprar'])
   }
   Quieresvender(){
    this.router.navigate(['web/QuieresComprar'])
   }
   inmobiliarias(){
    this.router.navigate(['web/inmobiliarias'])
   }
    novedadesactulidad(){
      this.router.navigate(['web/novedadesactulidad'])
  }

  ubicacion: String | undefined;
  tpropiedad: String | undefined;
  inmueble(entrada: number, tipo : number){
    this.router.navigate(["/inmueble/vista"],{ queryParams: { 'action': 'compra', 'tpropiedad': entrada, 'ubicacion': this.ubicacion, 'bandera': 13, 'tipoP': tipo} });
  }


}
