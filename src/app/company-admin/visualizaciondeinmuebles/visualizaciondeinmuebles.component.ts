import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { inmusinimagenes } from 'src/app/services/Interface/Interfaces';
import { SubirpublicacionComponent } from '../ventanaemergente/subirpublicacion/subirpublicacion.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-visualizaciondeinmuebles',
  templateUrl: './visualizaciondeinmuebles.component.html',
  styleUrls: ['./visualizaciondeinmuebles.component.scss']
})
export class VisualizaciondeinmueblesComponent implements OnInit {

  datos: inmusinimagenes[]=[];

  constructor(private httpService: HttpService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.httpService.obtenerultimosinmu(17).subscribe((data:any)=>{
      this.datos = data;
    })

  }

  openDialog(): void {
    
    const dialogRef = this.dialog.open(SubirpublicacionComponent, {
   });
   

}

}
