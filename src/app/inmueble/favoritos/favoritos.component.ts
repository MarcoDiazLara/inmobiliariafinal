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
  esFavorito: boolean = false;

  toggleFavorito() {
    
    if(this.isLoggedIn){
      console.log("Id_usuario: "+ localStorage.getItem("Id_Usuario")+ "Id_Inmueble" + this.id_inmueble);
      this.httpService.Favoritos(localStorage.getItem("Id_Usuario"), this.id_inmueble,"1").subscribe((data : any) =>{
        if(data == 1){
          this.esFavorito = !this.esFavorito;
        Swal.fire({
      
          icon: 'success',
          title: 'Se ha agregado a tus favoritos',
         
        })}else{
          Swal.fire('Este inmueble, ya se encuentra en tus favoritos');
        }
      })
      
      } else{
        Swal.fire('Inicia sesion para poder guardar favoritos');
      } 
  }

  isLoggedIn: boolean= true;
id_inmueble!: string;
id_usuario!: String;

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
  console.log(this.infoFavoritos);
    })
  }

  
  Favoritos(Id_Inmueble:string)
  {
    if(this.isLoggedIn){
    console.log("Id _ usuario"+ localStorage.getItem("Id_Usuario")+ "Id_Inmueble" + Id_Inmueble);
    this.httpService.Favoritos(localStorage.getItem("Id_Usuario"), Id_Inmueble,"1").subscribe((data : any) =>{
      if(data == 1){
      
      Swal.fire({
    
        icon: 'success',
        title: 'Se ha agregado a tus favoritos',
       
      })
      this.esFavorito = !this.esFavorito;}else{
        this.httpService.borrarlikes(localStorage.getItem("Id_Usuario"),Id_Inmueble).subscribe((data: any)=>{
          

          this.esFavorito = !this.esFavorito;
          Swal.fire('Este inmueble se quito de sus favoritos');
          this.httpService.obtenerInfoFavoritos(localStorage.getItem("Id_Usuario")).subscribe((data : any)=>{
            this.infoFavoritos=data;
          })
          
        })
        this.obtenerInfo();
      }
    })
    
    } else{
      Swal.fire('Inicia sesion para poder guardar favoritos');
    } 

  }
  
 
 
}
