import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { Inmuebles } from 'src/app/services/Interface/Interfaces';
import { TipoOperacion } from 'src/app/services/Interface/Interfaces';
import { CardInmuebles } from 'src/app/services/Interface/Interfaces';
import * as bootstrap from 'bootstrap';
import { ContactoComponent } from '../contacto/contacto.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-vistadeinmueble',
  templateUrl: './vistadeinmueble.component.html',
  styleUrls: ['./vistadeinmueble.component.css']
})

export class VistadeinmuebleComponent implements OnInit {

  isloggedIn : boolean = false;

  FilterFormGroup!: FormGroup;
  TInmuebles!: Inmuebles[];
  TOperacion!: TipoOperacion[];
  TCardInmuebles!: CardInmuebles[];
  Gimnasio!: any;
  RoofGarden!: any;
  Estacionamiento!: any;
  Jardin!: any;
  Alberca!: any;
  Conteo!: number;


  PAction!: any;
  PPropiedad!: any;
  PUbicacion!: any | '';

  PPrecioDesde!: any | '1';
  PPrecioHasta!: any | '5000000000';
  PIdOperacion!: any | '';
  PIdInmueble!: any | '';
  PKeywords!: any | '';
  PRVR!: any | '';
  PVideo!: any | '';
  PPlano!: any | '';
  PBanos!: any | '';
  PCI!: any | '';
  PAL!: any | '';
  PGYM!: any | '';
  PEst!: any | '';
  PFechaP!: any | '';
  PFechaA!: any | '';

  constructor(private router: Router, private httpService: HttpService, private formBuilder: FormBuilder, private route: ActivatedRoute, private dialog: MatDialog) {
  }

  // ordenarPorPrecioMaxMayorAMenor() {
  //   this.TCardInmuebles.sort((a, b) => {
  //     const precioMaxA = parseFloat(a.Precio_Max.replace('$', '').replace(',', ''));
  //     const precioMaxB = parseFloat(b.Precio_Max.replace('$', '').replace(',', ''));
  //     return precioMaxB - precioMaxA; // Orden descendente
  //   });
  // }
  ordenarPorPrecioMaxMayorAMenor() {
    this.TCardInmuebles.sort((a, b) => {
      // Extraer los números de los campos Precio_Max y convertirlos a números
      const precioMaxA = parseFloat(a.Precio_Max.replace(/[$,]/g, ''));
      const precioMaxB = parseFloat(b.Precio_Max.replace(/[$,]/g, ''));
      
      // Comparar los precios y ordenar de mayor a menor
      return precioMaxB - precioMaxA;
    });
  }

  ordenarPorPrecioMaxMenorAMayor() {
    this.TCardInmuebles.sort((a, b) => {
      // Extraer los números de los campos Precio_Max y convertirlos a números
      const precioMaxA = parseFloat(a.Precio_Max.replace(/[$,]/g, ''));
      const precioMaxB = parseFloat(b.Precio_Max.replace(/[$,]/g, ''));
      
      // Comparar los precios y ordenar de mayor a menor
      return   precioMaxA - precioMaxB;
    });
  }

  ordenarporFechadesc(){
    this.TCardInmuebles.sort((a, b) => {
      const fechaA = new Date(a.Fecha_Publicacion).getTime();
      const fechaB = new Date(b.Fecha_Publicacion).getTime();
      return fechaB - fechaA; // Orden descendente por fecha
    });
  }
  ordenarporFechaasc(){
    this.TCardInmuebles.sort((a, b) => {
      const fechaA = new Date(a.Fecha_Publicacion).getTime();
      const fechaB = new Date(b.Fecha_Publicacion).getTime();
      return   fechaA - fechaB; // Orden ascendente por fecha
    });
  }
  
  TOperacion1: any[] = [
    { Id_Tipo_Publicacion: 1, Tipo_Publicacion: 'Mayor precio' },
    { Id_Tipo_Publicacion: 2, Tipo_Publicacion: 'Menor precio' },
    { Id_Tipo_Publicacion: 3, Tipo_Publicacion: 'Mas antiguos' },
    {Id_Tipo_Publicacion: 4, Tipo_Publicacion: 'Mas recientes'}
  ];

  ngOnInit() {

    this.isloggedIn = this.httpService.getGlobalVariable();
    this.FilterFormGroup = this.formBuilder.group({
      p_Ubicacion: ['', [Validators.required]],
      p_Id_Tipo_Operacion: ['', [Validators.required]],
      p_Id_Tipo_Inmueble: ['', [Validators.required]],
      p_Id_Tipo_Anunciante: ['', [Validators.required]],
      p_Precio_Desde: ['', [Validators.required]],
      p_Precio_Hasta: ['', [Validators.required]],
      p_Keywords: ['', [Validators.required]],
      p_RVR: ['', [Validators.required]],
      p_Video: ['', [Validators.required]],
      p_Plano: ['', [Validators.required]],
      p_Num_Banos: ['', [Validators.required]],
      p_Num_CI: ['', [Validators.required]],
      p_Num_Alb: ['', [Validators.required]],
      p_Num_Gim: ['', [Validators.required]],
      p_Num_Est: ['', [Validators.required]],
      p_Date_Publish: ['', [Validators.required]],
      p_Time_Antique: ['', [Validators.required]],
    });

    this.getTipoInmueble();
    this.getTipoOperacion();

    this.route.queryParams.subscribe(params => {
      this.PAction = params['action'];
      this.PPropiedad = params['tpropiedad'];
      if (params['ubicacion'] !== undefined) {
        this.PUbicacion = params['ubicacion'];
      } else {
        this.PUbicacion = '';
      }
      this.PPrecioDesde = params['PrecioDesde'];
      this.PPrecioHasta = params['PrecioHasta'];
      this.PKeywords = params['Keywords'];
      this.PRVR = params['RVR'];
      this.PVideo = params['Video'];
      this.PPlano = params['Plano'];
      this.PBanos = params['Bano'];
      this.PCI = params['Cocina'];
      this.PAL = params['Alberca'];
      this.PGYM = params['Gym'];
      this.PEst = params['Esta'];
      this.PFechaA = params['FAnt'] ?? '';
      this.PFechaP = params['FPub'] ?? '';
  

      this.getInmueblesBuscador();
    });


  }

  getTipoInmueble() {
    this.httpService.tipoInmueble().subscribe({
      next: (data) => {
        
        this.TInmuebles = data;
      },
      
    })
  }

  getTipoOperacion() {
    this.httpService.tipoOperacion().subscribe({
      next: (data) => {
       
        this.TOperacion = data;
      },
      
    })
  }

  getInmueblesBuscador() {
    if(this.isloggedIn){
      this.httpService.getInmuebles(this.PUbicacion, this.PPropiedad, this.PAction, this.PPrecioDesde, this.PPrecioHasta, this.PKeywords, this.PRVR, this.PVideo, this.PPlano, this.PBanos, this.PCI, this.PAL, this.PGYM, this.PEst, this.PFechaA, this.PFechaP,localStorage.getItem("Id_Usuario")).subscribe({
        next: (data) => {
          
          this.TCardInmuebles = data;
        },
       
      })

    }else{
    this.httpService.getInmuebles(this.PUbicacion, this.PPropiedad, this.PAction, this.PPrecioDesde, this.PPrecioHasta, this.PKeywords, this.PRVR, this.PVideo, this.PPlano, this.PBanos, this.PCI, this.PAL, this.PGYM, this.PEst, this.PFechaA, this.PFechaP,"").subscribe({
      next: (data) => {
        
        this.TCardInmuebles = data;
      },
      
    })
  }

  }

  detallesInmueble(id_usu: any, id_inmu: any) {
    this.router.navigate(['/inmueble/detalles'], { queryParams: { 'id_usuario': id_usu, 'id_publicacion': id_inmu } })
  }
  contactoInmueble(id_usu: any, id_inmu: any) {
    
    //this.router.navigate(['/inmueble/detalles'], { queryParams: { 'id_usuario': id_usu, 'id_publicacion': id_inmu } })
    localStorage.setItem("id_usu2",id_usu);
    localStorage.setItem("id_inmu2", id_inmu);
    
    const dialogRef = this.dialog.open(ContactoComponent, {

    });
    
  dialogRef.afterClosed().subscribe(result => {
  
  
  });
  
  }

  changeUbicacion() {

  }

  changePrices() {
    
  }

  changeKeywords() {
    
  }

  clickOperacion(Id: string) {
    if (this.PIdOperacion == undefined) {
      this.PIdOperacion = '';
    }
    this.PIdOperacion = Id;
 
    this.PAction = Id;
  }

  clickInmueble(Id: string) {
    
    this.PIdInmueble = Id;
    this.PPropiedad = Id;
  }

  clickPRVR(code: any) {
    if (this.PRVR == 'RVR') {
      this.PRVR = '';

    } else {
      this.PRVR = code;
    
    }
    if (this.PRVR == undefined) {
      this.PRVR = '';
    }
    
  }

  clickVideo(code: any) {
    if (this.PVideo == 'V') {
      this.PVideo = '';
    } else {
      this.PVideo = code;
    }
    if (this.PVideo == undefined) {
      this.PVideo = '';
    }

  }

  clickPlano(code: any) {
    if (this.PPlano == 'P') {
      this.PPlano = '';
    } else {
      this.PPlano = code;
    }
    if (this.PPlano == undefined) {
      this.PPlano = '';
    }
    
  }

  clickBanos (val: any){
    this.PBanos = val;
   
  }

  clickCI(val: any){
    this.PCI = val;
   
  }

  clickAL(val: any){
    this.PAL = val;

  }

  clickGym(val: any){
    this.PGYM = val;

  }

  clickEst(val: any){
    this.PEst = val;
    
  }

  clickFechaPub(val: any){
    this.PFechaP = val;

  }

  clickFechaAnt(val: any){
    this.PFechaA = val;

  }

  applySearch() {
    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action': this.PAction, 'tpropiedad': this.PPropiedad, 'ubicacion': this.PUbicacion, 'PrecioDesde': this.PPrecioDesde, 'PrecioHasta': this.PPrecioHasta, 'Keywords': this.PKeywords, 'RVR': this.PRVR, 'Video': this.PVideo, 'Plano': this.PPlano, 'Bano': this.PBanos, 'Cocina': this.PCI, 'Alberca': this.PAL, 'Gym': this.PGYM, 'Esta': this.PEst, 'FAnt': this.PFechaA, 'FPub': this.PFechaP } });
  }

  backPage() {
    this.router.navigate(['/web']);
  }

  ordenarPublicaciones(opcion: string) {
    switch (opcion) {
      case 'Mayor precio':
        this.ordenarPorPrecioMaxMayorAMenor();
        break;
      case 'Menor precio':
        this.ordenarPorPrecioMaxMenorAMayor();
        break;
      case 'Mas antiguos':
        this.ordenarporFechadesc();
        break;
  
        case 'Mas recientes':
        this.ordenarporFechaasc();
        break;
      default:
        break;
    }}


}