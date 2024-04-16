import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {

  constructor(private httpService:HttpService) {}

  ngOnInit(): void {
    
  }
  
  prueba(){
    let id = localStorage.getItem("Id_Socio");
    this.httpService.powerBI(`https://inmobiliaria.arvispace.com/servicios/sp_web_powerBI.php?p_id_socio=${id}`).subscribe((data: any) =>{
      
     
    });
  }



}
