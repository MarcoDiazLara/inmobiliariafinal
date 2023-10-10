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
    { name: "Perfil", route: "perfil",icon: "person" , label: "PERFIL",number:'0' },
    { name: "Altainmobiliaria", route: "altainmo",icon: "perm_contact_calendar" , label: "Alta de usuarios",number:'0'},
    { name: "altasocio", route: "altasocio",icon: "perm_contact_calendar" , label: "Alta de socios",number:'0'},
    
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


