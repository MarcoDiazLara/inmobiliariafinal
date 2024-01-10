import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';
import { infoUsuario } from 'src/app/services/Interface/Interfaces';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {
  infoFavoritos:any[]=[];

 
  datos!: infoUsuario;

  constructor(public dialog: MatDialog,
    private httpService: HttpService,
    
  ) { }

  ngOnInit(): void {

    this.obtenerInfo();
  
  }
  openDialog(): void {

  }

  obtenerInfo(){
    this.httpService.obtenerInfoFavoritos(localStorage.getItem("Id_Usuario")).subscribe((data : any) =>{
  this.infoFavoritos=data;
    })
  }
 
 
}
