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
  mobileQuery: MediaQueryList;

     fillerNav = [
    { name: "Perfil", route: "Perfil",icon: "person" , label: "Perfil",number:'0' },
    { name: "altabrokers", route: "altabrokers",icon: "group_add" , label: "Alta de brokers",number:'0'},
    { name: "notificaciones", route: "Notificaciones",icon: "notifications" , label: "Notificaciones",number:'0'},
    { name: "notificaciones", route: "Notificaciones",icon: "domain_add" , label: "Notificaciones",number:'0'},
  
    
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


