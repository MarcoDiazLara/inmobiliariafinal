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
    this.httpService.obtenercontactosusuario(localStorage.getItem("Id_Usuario")).subscribe((data : any) =>{
  this.histo=data;
  console.log(this.infoFavoritos);
    })
  }

  detallesInmueble(id_usu: any, id_inmu: any) {
    this.router.navigate(['/inmueble/detalles'], { queryParams: { 'id_usuario': id_usu, 'id_publicacion': id_inmu } })
  }
    

}
