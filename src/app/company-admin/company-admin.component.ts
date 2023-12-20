import { Component, OnInit } from '@angular/core';
//sidenav
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-admin',
  templateUrl: './company-admin.component.html',
  styleUrls: ['./company-admin.component.scss']
})

export class CompanyAdminComponent implements OnDestroy {
  nombre : any;
  mobileQuery: MediaQueryList;

     fillerNav = [
    { name: "Perfil", route: "Perfil",icon: "home" , label: "Hola",number:'0' },
    { name: "perfilempresa", route: "perfilempresa",icon: "apartment" , label: "Perfil Empresa",number:'0'},
    { name: "Notificaciones", route: "Notificaciones",icon: "notifications" , label: "Notificaciones",number:'0'},
    { name: "Alta Usuarios", route: "altabrokers",icon: "group_add" , label: "Alta de Usuarios",number:'0'},
    { name: "Inventario", route: "Inventario",icon: "inventory" , label: "Inventario",number:'0' },
    { name: "Hito", route: "Hitoadmin",icon: "event" , label: "Fecha Hito",number:'0' },
    { name: "Asignar-reasignar", route: "Asignar-reasignar",icon: "house" , label: "Asignar-Reasignar",number:'0'},
    { name: "PantallaUsuarios", route: "PantallaUsuarios",icon: "person_search" , label: "Pantalla Usuarios",number:'0'},
    { name: "asignar-reasignar-user", route: "resignar-asignarUser",icon: "groups_3" , label: "Asignar Reasignar Usuarios",number:'0'},
    { name: "Catalogoinmueble", route: "catalogoinmueble",icon: "collections_bookmark" , label: "Sube tu Catalogo de Inmueble",number:'0'},
    { name: "estatususuario",    route: "estatususuario",icon: "collections_bookmark" , label: "estatususuario",number:'0'},
    { name: "Salir",route: "web",icon: "logout", label: "SALIR" ,number:'1'},
  
    
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.nombre = localStorage.getItem("Nombre_Usuario");
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun=true;

  public salir(op:any) {

    // alert("diste clic en salir"+op);
  }

}


