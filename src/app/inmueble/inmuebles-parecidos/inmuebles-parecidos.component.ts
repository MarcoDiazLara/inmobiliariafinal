import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { CardInmuebles } from 'src/app/services/Interface/Interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inmuebles-parecidos',
  templateUrl: './inmuebles-parecidos.component.html',
  styleUrls: ['./inmuebles-parecidos.component.scss']
})
export class InmueblesParecidosComponent implements OnInit {

  @ViewChild('slickModal') slickModal!: ElementRef;

  @Input() objetoPropiedad: any;
  isloggedIn: any;
  TCardInmuebles : CardInmuebles[] = [];
  PUbicacion:string = "";
  PPropiedad!:string;
  PAction!:string;
  PPrecioDesde!:string;
  PPrecioHasta!:string;
  PKeywords: string = "";
  PRVR:string ="";
  PVideo:string = "";
  PPlano:string = "";
  PBanos:string = "";
  PCI:string ="";
  PAL:string = "";
  PGYM:string = "";
  PEst: string="";
  PFechaA:string = "";
  PFechaP:string = "";
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.isloggedIn = this.httpService.getGlobalVariable();

    if(this.objetoPropiedad.Id_Tipo_Publicacion == 1){
      this.PAction = "venta";
    }else if(this.objetoPropiedad.Id_Tipo_Publicacion == 2){
      this.PAction = "renta";
    }else if(this.objetoPropiedad.Id_Tipo_Publicacion == 3){
      this.PAction = "remate";
    }else if(this.objetoPropiedad.Id_Tipo_Publicacion == 4){
      this.PAction = "desarrollo";
    }

    this.PPropiedad = this.objetoPropiedad.Id_Tipo_Inmueble;
    this.PPrecioDesde = "0";
    this.PPrecioHasta = "50000000000000";
    // this.PBanos = this.objetoPropiedad.Bano;
    // this.PCI = this.objetoPropiedad.Cocina_Integral;
    // this.PAL = this.objetoPropiedad.Alberca;
    // this.PGYM = this.objetoPropiedad.Gimnasio;
    // this.PEst = this.objetoPropiedad.Estacionamiento;


    this.getInmueblesBuscador();
    console.log(this.TCardInmuebles);
  }

  
  

  getInmueblesBuscador() {
    if(this.isloggedIn){
      this.httpService.getInmuebles(this.PUbicacion, this.PPropiedad, this.PAction, this.PPrecioDesde, this.PPrecioHasta, this.PKeywords, this.PRVR, this.PVideo, this.PPlano, this.PBanos, this.PCI, this.PAL, this.PGYM, this.PEst, this.PFechaA, this.PFechaP,localStorage.getItem("Id_Usuario")).subscribe({
        next: (data) => {
          console.log(data);
          this.TCardInmuebles = data;
        },
        error: (e) => console.log(e),
        complete: () => console.log("Complete")
      })

    }else{
    this.httpService.getInmuebles(this.PUbicacion, this.PPropiedad, this.PAction, this.PPrecioDesde, this.PPrecioHasta, this.PKeywords, this.PRVR, this.PVideo, this.PPlano, this.PBanos, this.PCI, this.PAL, this.PGYM, this.PEst, this.PFechaA, this.PFechaP,"").subscribe({
      next: (data) => {
        console.log(data);
        this.TCardInmuebles = data;
      },
      error: (e) => console.log(e),
      complete: () => console.log("Complete")
    })
  }

}

detallesInmueble(id_usu: any, id_inmu: any) {
  console.log("Id Usuario Card" + id_usu)
  this.router.navigate(['/inmueble/detalles'], { queryParams: { 'id_usuario': id_usu, 'id_publicacion': id_inmu } })
}
}
