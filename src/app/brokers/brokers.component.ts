import { Component, OnInit } from '@angular/core';
//sidenav
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  styleUrls: ['./brokers.component.scss']
})
export class BrokersComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  nombre: any;

  fillerNav = [
    { name: "Perfil", route: "perfil", icon: "home", label: "Hola", number: '0' },
    { name: "Notificaciones", route: "notificacionbroker", icon: "notifications", label: "Notificaciones", number: '0' },
    { name: "Asignar-reasignar", route: "asignar-reasignar", icon: "groups", label: "Asignar Reasignar", number: '0' },
    { name: "Calendario", route: "calendario", icon: "date_range", label: " Agenda", number: '0' },
    { name: "Hitobroker", route: "Hitobroker",icon: "event" , label: "Fecha Hito",number:'0' },
    // { name: "Hito", route: "Hitobroker",icon: "event" , label: "Fecha Hito",number:'0' },
    { name: "fechashito", route: "fechashito",icon: "collections_bookmark" , label: "fechashito ",number:'0'},
    { name: "Catalogoinmueble", route: "catalogoinmueble",icon: "collections_bookmark" , label: "Sube tu Catalogo de Inmueble",number:'0'},
    { name: "Salir", route: "web", icon: "logout", label: "Salir", number: '1' }

  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
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

}







