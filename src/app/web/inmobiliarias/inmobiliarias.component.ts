import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inmobiliarias',
  templateUrl: './inmobiliarias.component.html',
  styleUrls: ['./inmobiliarias.component.css']
})
export class InmobiliariasComponent implements OnInit {
  isLoggedIn: boolean = false;
  @ViewChild('ventanaEmergente') ventanaEmergente: any;

  abrir(){
    if(this.isLoggedIn){
      
    }
    else{
      this.abrirVentanaEmergente();
    }
  }

  abrirVentanaEmergente(): void {
    this.ventanaEmergente.nativeElement.style.display = 'block';
  }

  cerrarVentanaEmergente(): void {
    this.ventanaEmergente.nativeElement.style.display = 'none';
  }





  constructor() { }

  ngOnInit(): void {
  }

}
