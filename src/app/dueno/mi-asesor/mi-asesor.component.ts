import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { infoAsesor } from 'src/app/services/Interface/Interfaces';

@Component({
  selector: 'app-mi-asesor',
  templateUrl: './mi-asesor.component.html',
  styleUrls: ['./mi-asesor.component.scss']
})
export class MiAsesorComponent implements OnInit {

  datosAsesor!: infoAsesor;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.obtenerinfoAsesor(localStorage.getItem("Id_Usuario")).subscribe((data:any)=>{
      //console.log(data);
      this.datosAsesor = data[0];
    })
  }

}
