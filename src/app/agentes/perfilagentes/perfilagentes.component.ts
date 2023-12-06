import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-perfilagentes',
  templateUrl: './perfilagentes.component.html',
  styleUrls: ['./perfilagentes.component.scss']
})
export class PerfilagentesComponent {

  saludo: string = '';

  ngOnInit() {
    const fecha = new Date();
    const hora = fecha.getHours();

    if (hora >= 0 && hora < 12) {
      this.saludo = '¡Buenos días!';
    } else if (hora >= 12 && hora < 18) {
      this.saludo = '¡Buenas tardes!';
    } else {
      this.saludo = '¡Buenas noches!';
    }
  }
  


  constructor(
  
  ) {}


    // Apartado Dialog Pantalla Emergente 







 
   

 
}
