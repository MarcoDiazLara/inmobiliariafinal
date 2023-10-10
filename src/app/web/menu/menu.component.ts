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

 directo(){
  this.router.navigate(['web/particula']);

 }
 corredor(){
  this.router.navigate(['web/Inmobiliariacorredor']);
 }


 desarrolo(){
  this.router.navigate(['web/Constructoradesarrolladora']);


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
    this.router.navigate(["cliente/cliente/clientePerfil"]),{ replaceUrl: true };
  }

 



}
