import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { MatDialog,} from '@angular/material/dialog';
import { PlanesComponent } from '../planes/planes.component';

@Component({
  selector: 'app-menuinmueble',
  templateUrl: './menuinmueble.component.html',
  styleUrls: ['./menuinmueble.component.scss']
})
export class MenuinmuebleComponent  {
   
  isLoggedIn: boolean = false;

  constructor(private router: Router,private httpService: HttpService,public dialog: MatDialog) { }

 


  Panel(){
    let entrada = localStorage.getItem("Id_Tipo_Usuario");
    if(entrada == "6" || entrada == "1"){
      this.router.navigate(["/superUsuario/perfil"]);
    }else if (entrada == "2"){
      this.router.navigate(["/usuario/perfil"]);
    }else if (entrada == "3"){
      this.router.navigate(["/asesor"]);
    }else if( entrada == "4"){
      this.router.navigate(["cliente/cliente/Perfil"]);
    }else if ( entrada == "5"){
      this.router.navigate(["/Company/Perfil"]);
    }

  }
  Editar(){
    this.router.navigate(["cliente/cliente/Perfil"]),{ replaceUrl: true };
  }
  cerrar(){
    //this.httpService.setGlobalVariable(false);
    const itemsToRemove =[
      "Nombre_Usuario",
      "Id_Usuario",
      "Id_Tipo_Usuario"
    ];
    itemsToRemove.forEach( item => {
      localStorage.removeItem(item);
    })
    this.httpService.setGlobalVariable(false);
    this.router.navigate(["/web"]);
   }
   Espacio(){
    this.router.navigate(['inmueble/menuinmueble']);
  }

  Avisos(){
    this.router.navigate(['inmueble/avisos']);
    
  }


  Contratos()
{
  this.router.navigate(['inmueble/contratos']);


}

home(){
  this.router.navigate(['/web']);
 }
 planes(): void {
  const dialogRef = this.dialog.open(PlanesComponent, {

  });

 }
}


