import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { inmobiliaria } from 'src/app/services/Interface/Interfaces';

@Component({
  selector: 'app-inmobiliarias',
  templateUrl: './inmobiliarias.component.html',
  styleUrls: ['./inmobiliarias.component.css']
})
export class InmobiliariasComponent implements OnInit {
  isLoggedIn: boolean = false;
  @ViewChild('ventanaEmergente') ventanaEmergente: any;

  inmobiliarias: inmobiliaria[] = [];
  inmobiliariaSeleccionada!: inmobiliaria;
  fecha: any;
  aux:any;
  abrir(inmobiliaria: inmobiliaria){
    this.inmobiliariaSeleccionada = inmobiliaria;
    this.fecha = inmobiliaria.Created_Date;
    
      this.abrirVentanaEmergente();
    
  }

  abrirVentanaEmergente(): void {
    this.ventanaEmergente.nativeElement.style.display = 'block';
  }

  cerrarVentanaEmergente(): void {
    
    this.ventanaEmergente.nativeElement.style.display = 'none';
  }





  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.mostrarInmobiliarias().subscribe((data : any)=> {
      this.inmobiliarias = data;
    })
  }

}
