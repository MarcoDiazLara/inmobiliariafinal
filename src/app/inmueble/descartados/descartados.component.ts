import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';
import { infoUsuario } from 'src/app/services/Interface/Interfaces';
import { historialvisto } from 'src/app/services/Interface/Interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-descartados',
  templateUrl: './descartados.component.html',
  styleUrls: ['./descartados.component.scss']
})
export class DescartadosComponent implements OnInit {

  infoFavoritos:any[]=[];
  datos!: infoUsuario;
  esFavorito: boolean = false;
  histo : historialvisto[]=[];


  isLoggedIn: boolean= true;
id_inmueble!: string;
id_usuario!: String;

  constructor(public dialog: MatDialog,
    private httpService: HttpService,
    private router: Router
    
  ) { }

  ngOnInit(): void {

    this.obtenerInfo();
    
  
  }
  openDialog(): void {

  }

  obtenerInfo(){
    this.httpService.obtenerDescartados(localStorage.getItem("Id_Usuario")).subscribe((data : any) =>{
  this.histo=data;
  console.log(this.infoFavoritos);
    })
  }

  habilitar( id_inmu: any) {
    this.httpService.habilitarDescartados(localStorage.getItem("Id_Usuario"), id_inmu).subscribe((data:any)=>{
        this.obtenerInfo();
    })
  }
    

}
