import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atajos',
  templateUrl: './atajos.component.html',
  styleUrls: ['./atajos.component.css']
})
export class AtajosComponent implements OnInit {

  constructor( private router:Router) { }
  ResultadoosBusqueda(){
    this.router.navigate(["/inmueble/vista"]);
  }


  ngOnInit(): void {
  }

}
