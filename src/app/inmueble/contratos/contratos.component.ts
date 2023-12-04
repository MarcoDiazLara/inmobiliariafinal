import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { compras } from 'src/app/services/Interface/Interfaces';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.scss']
})
export class ContratosComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
      this.httpService.obtenerCompras(localStorage.getItem("Id_Usuario")).subscribe((data:any) =>{
        this.datosVentas = data;
        console.log(data);
      })
  }
  datosVentas: compras[] = [];
  mostrarTabla = false;

  toggleTabla() {
    this.mostrarTabla = !this.mostrarTabla;
  }

}
