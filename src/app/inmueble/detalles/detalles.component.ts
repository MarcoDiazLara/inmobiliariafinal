import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
  
})
export class DetallesComponent implements OnInit {

  constructor( private router:Router) { }


  back(){
    this.router.navigate(["/inmueble/vista"]);
  }

  ngOnInit(): void {
  }

}



