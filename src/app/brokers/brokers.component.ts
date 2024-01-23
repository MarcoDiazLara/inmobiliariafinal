import { Component, OnInit } from '@angular/core';
//sidenav
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../services/http/http.service';
import { BienvenidaComponent } from '../web/bienvenida/bienvenida.component';

@Component({
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  styleUrls: ['./brokers.component.scss']
})
export class BrokersComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  nombre: any;

  fillerNav = [
    { name: "Home", route: "bienvenida", icon: "home", label: "Hola", number: '0', onClick:this.xd },
    { name: "Perfil", route: "perfil", icon: "person", label: "Perfil", number: '0', onClick:this.xd },
    // ''{ name: "Notificaciones", route: "notificacionbroker", icon: "notifications", label: "Notificaciones", number: '0', onClick:this.xd },''
    { name: "fechashito", route: "fechashito", icon: "event", label: "Fechas Hito ", number: '0', onClick:this.xd },
    { name: "Asignar-reasignar", route: "asignar-reasignar", icon: "groups", label: "Asignar Reasignar", number: '0', onClick:this.xd },
    { name: "Calendario", route: "calendario", icon: "date_range", label: " Agenda", number: '0', onClick:this.xd },
    { name: "Inventario", route: "invesntario", icon: "inventory", label: "Inventario", number: '0' , onClick:this.xd},
    // { name: "Asignar Users", route: "asignarUsers", icon: "group", label: "Asignar Reasignar Usuarios", number: '0' , onClick:this.xd},
     { name: "Catalogoinmueble", route: "catalogoinmueble", icon: "collections_bookmark", label: "Sube tu Catalogo de Inmueble", number: '0' , onClick:this.xd },
  
    { name: "Salir", route: "web", icon: "logout", label: "Salir", number: '1', onClick: () =>  this.logout() }

  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router,
    private httpService: HttpService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.nombre = localStorage.getItem("Nombre_Usuario");
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  public salir() {
    //this.router.navigate(["/web"]);
    // alert("diste clic en salir"+op);
  }

  
  xd(){
//no borrar esta funcnion porfa
  }

  logout(){
    const itemsToRemove = [
      'Nombre_Usuario',
      'Id_Usuario',
      'Id_Tipo_Usuario',
      'Id_Tipo_Plan',
      'Bandera',
      'Id_Socio'
    ];

    itemsToRemove.forEach(item => {
      localStorage.removeItem(item);
    });

    this.httpService.setGlobalVariable(false);
    this.router.navigate(['/web']);

  }

}







