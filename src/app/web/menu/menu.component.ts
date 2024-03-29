import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service'; // 1
import { EtiquetasService } from 'src/app/services/etiquetas/etiquetas.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {



  isLoggedIn: boolean = false; //2
  PPrecioDesde!: any | '1';
  PPrecioHasta!: any | '5000000000';



  constructor(private router: Router, private httpService: HttpService, private etiquetas: EtiquetasService) {

  }
 //3
 et!:any;
  ngOnInit() {
    this.isLoggedIn = this.httpService.getGlobalVariable();
    this.etiquetas.etmenu().subscribe((data:any)=>{
      this.et = data;
    })
  }

  Login() {

    this.router.navigate(['/login']);

  }
  contactos() {

    this.router.navigate(['web/contacto']);

  }
  Guiarentar() {

    this.router.navigate(['web/Guiarentar']);

  }



  directo() {
    this.router.navigate(['web/particula']);

  }
  corredor() {
    this.router.navigate(['web/Inmobiliariacorredor']);
  }


  desarrolo() {
    this.router.navigate(['web/Constructoradesarrolladora']);


  }

  blog() {
    this.router.navigate(['web/blog']);

  }

  home() {
    this.router.navigate(['/web']);
  }







  cerrar() {
    //this.httpService.setGlobalVariable(false);
    const itemsToRemove = [
      "Nombre_Usuario",
      "Id_Usuario",
      "Id_Tipo_Usuario",
      "Id_Tipo_Plan",
      "Bandera",
      "Id_Socio",
      "tipodeplan"
    ];
    itemsToRemove.forEach(item => {
      localStorage.removeItem(item);
    })
    this.httpService.setGlobalVariable(false);
    this.ngOnInit();
    this.router.navigate(["/web"]);
    
  }



  @ViewChild('ventanaEmergente') ventanaEmergente: any;

  abrir() {
    if (this.isLoggedIn) {
      this.router.navigate(["/inmueble/inmueble"]);
    }
    else {
      this.abrirVentanaEmergente();
    }
  }

  abrirVentanaEmergente(): void {
    this.ventanaEmergente.nativeElement.style.display = 'block';
  }

  cerrarVentanaEmergente(): void {
    this.ventanaEmergente.nativeElement.style.display = 'none';
  }

  Editar() {
    this.router.navigate(["cliente/cliente/Perfil"]), { replaceUrl: true };
  }

  Panel() {
    let entrada = localStorage.getItem("Id_Tipo_Usuario");
    if (entrada == "6" || entrada == "1") {
      this.router.navigate(["/superUsuario/perfil"]);
    } else if (entrada == "2") {
      this.router.navigate(["/usuario/perfil"]);
    } else if (entrada == "3") {
      this.router.navigate(["/asesor/Perfil"]);
    } else if (entrada == "4") {
      this.router.navigate(["cliente/cliente/Perfil"]);
    } else if (entrada == "10") {
      this.router.navigate(["/Company/bienvenida"]);
    }
    else if (entrada == "5") {
      this.router.navigate(["/Dueno/bienvenida"]);
    } else if (entrada == "11") {
      this.router.navigate(["/arvice/mostrarInmuebles"]);
    }
  }
  // Inmueble 
  Espacio() {
    this.router.navigate(['inmueble/avisos']);
  }

  RemateHipotecario() {

    this.router.navigate(['web/Remate']);

  }
  EvitaFraude() {
    this.router.navigate(['web/EvitaFraude']);
  }
  Quierescomprar() {
    this.router.navigate(['web/QuieresComprar'])
  }
  Quieresvender() {
    this.router.navigate(['web/QuieresVender'])
  }
  inmobiliarias() {
    this.router.navigate(['web/inmobiliarias'])
  }
  novedadesactulidad() {
    this.router.navigate(['web/novedadesactulidad'])
  }

  BusqCompra(propiedad: string) {
    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action': 'venta', 'tpropiedad': propiedad, 'ubicacion': '', 'PrecioDesde': '1', 'PrecioHasta': '500000', 'Keywords': '' , 'RVR': '' , 'Video': '' , 'Plano': '', 'Bano': '', 'Cocina': '', 'Alberca': '', 'Gym': '', 'Esta': '', 'FAnt':'', 'FPub':''} });
  }

  BusqRenta(propiedad: string) {
    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action': 'renta', 'tpropiedad': propiedad, 'ubicacion': '', 'PrecioDesde': '1', 'PrecioHasta': '500000', 'Keywords': '' , 'RVR': '' , 'Video': '' , 'Plano': '', 'Bano': '', 'Cocina': '', 'Alberca': '', 'Gym': '', 'Esta': '', 'FAnt':'', 'FPub':''} });
  }

  busqestadorenta(estado: string){
    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action': 'renta', 'tpropiedad': '0', 'ubicacion': estado, 'PrecioDesde': '1', 'PrecioHasta': '500000', 'Keywords': '' , 'RVR': '' , 'Video': '' , 'Plano': '', 'Bano': '', 'Cocina': '', 'Alberca': '', 'Gym': '', 'Esta': '', 'FAnt':'', 'FPub':''} });
  }

  busqestadoventa(estado: string){
    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action': 'venta', 'tpropiedad': '0', 'ubicacion': estado, 'PrecioDesde': '1', 'PrecioHasta': '500000', 'Keywords': '' , 'RVR': '' , 'Video': '' , 'Plano': '', 'Bano': '', 'Cocina': '', 'Alberca': '', 'Gym': '', 'Esta': '', 'FAnt':'', 'FPub':''} });
  }



  BusqRemate(propiedad: string) {
    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action': 'remate', 'tpropiedad': propiedad, 'ubicacion': '', 'PrecioDesde': '1', 'PrecioHasta': '500000', 'Keywords': '' , 'RVR': '' , 'Video': '' , 'Plano': '', 'Bano': '', 'Cocina': '', 'Alberca': '', 'Gym': '', 'Esta': '', 'FAnt':'', 'FPub':''} });
  }

  BusqDesarrollo(propiedad: string) {
    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action': 'desarrollo', 'tpropiedad': propiedad, 'ubicacion': '', 'PrecioDesde': '1', 'PrecioHasta': '500000', 'Keywords': '' , 'RVR': '' , 'Video': '' , 'Plano': '', 'Bano': '', 'Cocina': '', 'Alberca': '', 'Gym': '', 'Esta': '', 'FAnt':'', 'FPub':''} });
  }


  abrirEnNuevaPestana() {
    // Abre la URL en una nueva pestaña
    window.open("https://www.holacasa.mx/", "_blank");
}
}
