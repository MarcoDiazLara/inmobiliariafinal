import { Component, OnInit } from '@angular/core';
import { Asesores } from 'src/app/services/Interface/Interfaces';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-eliminarasesores',
  templateUrl: './eliminarasesores.component.html',
  styleUrls: ['./eliminarasesores.component.css']
})
export class EliminarasesoresComponent implements OnInit {

  searchTerm: string = '';
  asesores : Asesores[] = [];
  asesor !: Asesores;
  confirmacionVisible: boolean = false;
  asesorSeleccionado: any;
  id: any;

  constructor(private httpService: HttpService) { }


  ngOnInit(): void {
  }

  buscarAsesor() {
    let p_nombre = this.searchTerm;
    this.httpService.obtenerAsesores(p_nombre).subscribe((resp : any)=> {
      if(resp !== 201){
        this.asesores = resp;
      }
     },(err)=>{
      console.log(err);
     
    })
  }

  mostrarConfirmacion(nombre:string,id: string) {
    this.confirmacionVisible = true;
    this.asesorSeleccionado = nombre;
    this.id = id;
  }

  eliminarAsesor() {
  this.httpService.eliminarAsesores(this.id).subscribe((data : any)=>{
    if(data = 1){
      alert("Se elimino el Asesor")
    }
  })
  }

  cancelarEliminar() {
    this.confirmacionVisible = false;
  }



  

}
