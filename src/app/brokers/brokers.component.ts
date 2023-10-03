import { Component, OnInit } from '@angular/core';
//sidenav
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  styleUrls: ['./brokers.component.scss']
})
export class BrokersComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = [
    { name: "Perfil", route: "perfil",icon: "person" , label: "PERFIL",number:'0' },
    { name: "BROKERS", route: "seguimiento",icon: "person" , label: "BROKER",number:'0' },
    // { name: "Notificaciones", route: "notificaciones",icon: "person" , label: "NOTIFICACIONES",number:'0' },
    // { name: "Inmuebles", route: "inmueble",icon: "home" , label: "Inmueble",number:'0' },
    { name: "Salir",icon: "logout", label: "SALIR" ,number:'1'}

  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun=true;

  public salir(op:any) {

    // alert("diste clic en salir"+op);
  }

}







