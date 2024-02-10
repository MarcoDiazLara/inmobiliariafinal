import { Component, OnInit } from '@angular/core';
//sidenav
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'app-company-admin',
  templateUrl: './company-admin.component.html',
  styleUrls: ['./company-admin.component.scss']
})

export class CompanyAdminComponent implements OnDestroy {
  nombre : any;
  mobileQuery: MediaQueryList;

     fillerNav = [
    { name: "bienvenida", route: "bienvenida",icon: "home" , label: "Hola",number:'0', onClick:this.xd },
    { name: "perfil", route: "Perfil",icon: "person" , label: "Perfil",number:'0', onClick:this.xd},
    { name: "perfilempresa", route: "perfilempresa",icon: "domain" , label: "Perfil Empresa",number:'0', onClick:this.xd},
    { name: "Notificaciones", route: "Notificaciones",icon: "notifications" , label: "Notificaciones",number:'0', onClick:this.xd},
    { name: "Alta Usuarios", route: "altabrokers",icon: "group_add" , label: "Alta de Usuarios",number:'0', onClick:this.xd},
    { name: "Hito", route: "Hitoadmin",icon: "event" , label: "Fecha Hito",number:'0', onClick:this.xd },
    { name: "Asignar-reasignar", route: "Asignar-reasignar",icon: "group" , label: "Asignar-Inmuebles",number:'0', onClick:this.xd},
    { name: "asignar-reasignar-user", route: "EquipoTrabajo",icon: "groups_3" , label: "Asignar Equipo Trabajo",number:'0', onClick:this.xd},
    { name: "Inventario", route: "Inventario",icon: "inventory" , label: "Inventario",number:'0', onClick:this.xd },
    { name: "PantallaUsuarios", route: "PantallaUsuarios",icon: "person_search" , label: "Usuarios",number:'0', onClick:this.xd},
    // { name: "asignar-reasignar-user", route: "resignar-asignarUser",icon: "groups_3" , label: "Asignar Reasignar Usuarios",number:'0'},
    { name: "Catalogoinmueble", route: "catalogoinmueble",icon: "collections_bookmark" , label: "Sube tu Catalogo de Inmueble",number:'0', onClick:this.xd},
    { name: "Cargausuarios", route: "cargausuario",icon: "upload" , label: "Carga de Usuarios",number:'0', onClick:this.xd},
    { name: "cargadeinmuebles", route: "cargadeinmuebles",icon: "upload_file" , label: "Carga de Inmuebles",number:'0', onClick:this.xd},
    { name: "visualizaciondeinmuebles", route: "visualizaciondeinmuebles",icon: "visibility" , label: "Visualizacion de Inmuebles",number:'0', onClick:this.xd},
    { name: "estatususuario",    route: "estatususuario",icon: "person_remove" , label: "Deshabilitar Cuentas",number:'0', onClick:this.xd},
    { name: "historial",    route: "historial",icon: "history" , label: "Historial de inmuebles",number:'0', onClick:this.xd},
    { name: "Salir",icon: "logout", label: "SALIR" ,number:'1', onClick: () =>  this.logout()},
  
    
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router, private httpService: HttpService) {
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

  
  xd(){

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


