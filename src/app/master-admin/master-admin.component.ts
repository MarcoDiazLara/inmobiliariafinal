import { Component, OnInit } from '@angular/core';
//sidenav
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-admin',
  templateUrl: './master-admin.component.html',
  styleUrls: ['./master-admin.component.scss'],
})

export class MasterAdminComponent  implements OnDestroy {
  mobileQuery: MediaQueryList;
  nombre: any;

     fillerNav = [
    { name: "Perfil", route: "perfil", icon: "home", label: "Hola", number: '0' },
    // { name: "perfil", route: "perfil",icon: "person" , label: "Perfil",number:'0' },
    { name: "Notificaciones", route: "notificaciones",icon: "notifications" , label: "Notificaciones",number:'0' }, 
    { name: "altausuario", route: "altausuario",icon: "group_add" , label: "Alta usuario",number:'0' },
    { name: "altasocio", route: "altasocio",icon: "domain_add" , label: "Alta socio",number:'0' },
    // { name: "asignar-re", route: "Asignar-reasignar",icon: "groups" , label: "Asignar-Reasignar",number:'0' },
    { name: "asignar-re", route: "estatusUsuario",icon: "person_remove" , label: "Desabilitar Cuentas",number:'0' },
    { name: "Salir",route: "web",icon: "logout", label: "SALIR" ,number:'1'}
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

    //this.router.navigate(["/web"]);
  }

}



