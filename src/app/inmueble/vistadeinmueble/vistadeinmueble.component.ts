import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { Inmuebles } from 'src/app/services/Interface/Interfaces';
import { TipoOperacion } from 'src/app/services/Interface/Interfaces';
import { CardInmuebles } from 'src/app/services/Interface/Interfaces';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-vistadeinmueble',
  templateUrl: './vistadeinmueble.component.html',
  styleUrls: ['./vistadeinmueble.component.css']
})

export class VistadeinmuebleComponent implements OnInit {

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

  constructor(private router: Router, private httpService: HttpService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit() {
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
      this.PRVR = params['RVR']
      this.PVideo = params['Video']
      this.PPlano = params['Plano']
      console.log('Action', this.PAction);
      console.log('Propiedad', this.PPropiedad);
      console.log('Ubicacion', this.PUbicacion);
      console.log('PrecioDesde', this.PPrecioDesde);
      console.log('PrecioHasta', this.PPrecioHasta);

      this.getInmueblesBuscador();
    });


  }

  getTipoInmueble() {
    this.httpService.tipoInmueble().subscribe({
      next: (data) => {
        console.info(data)
        this.TInmuebles = data;
      },
      error: (e) => console.log(e),
      complete: () => console.log("Complete")
    })
  }

  getTipoOperacion() {
    this.httpService.tipoOperacion().subscribe({
      next: (data) => {
        console.info(data)
        this.TOperacion = data;
      },
      error: (e) => console.log(e),
      complete: () => console.log("Complete")
    })
  }

  getInmueblesBuscador() {
    this.httpService.getInmuebles(this.PUbicacion, this.PPropiedad, this.PAction, this.PPrecioDesde, this.PPrecioHasta, this.PKeywords, this.PRVR, this.PVideo, this.PPlano).subscribe({
      next: (data) => {
        console.log(data);
        this.TCardInmuebles = data;
      },
      error: (e) => console.log(e),
      complete: () => console.log("Complete")
    })

  }

  detallesInmueble(id_usu: any, id_inmu: any) {
    this.router.navigate(['/inmueble/detalles'], { queryParams: { 'id_usuario': id_usu, 'id_publicacion': id_inmu } })
  }

  changeUbicacion() {
    console.log('Ubicacion Filtro', this.PUbicacion);
  }

  changePrices() {
    console.log('Ubicacion Filtro', this.PPrecioDesde);
    console.log('Ubicacion Filtro', this.PPrecioHasta);
  }

  changeKeywords() {
    console.log('Keywords: ', this.PKeywords);
  }

  clickOperacion(Id: string) {
    if (this.PIdOperacion == undefined) {
      this.PIdOperacion = '';
    }
    this.PIdOperacion = this.PIdOperacion + Id;
    console.log('Click Operacion', this.PIdOperacion);
    this.PAction = Id;
  }

  clickInmueble(Id: string) {
    console.log('Click Tipo Inmueble', Id);
    this.PIdInmueble = Id;
    this.PPropiedad = Id;
  }

  clickPRVR(code: any) {
    if (this.PRVR == 'RVR') {
      this.PRVR = '';
      console.log('RecorridoV: ', this.PRVR);
    } else {
      this.PRVR = code;
      console.log('RecorridoV: ', this.PRVR);
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
    console.log('Video: ', this.PVideo);
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
    console.log('Plano: ', this.PPlano);
  }

  applySearch() {
    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action': this.PAction, 'tpropiedad': this.PPropiedad, 'ubicacion': this.PUbicacion, 'PrecioDesde': this.PPrecioDesde, 'PrecioHasta': this.PPrecioHasta, 'Keywords': this.PKeywords, 'RVR': this.PRVR, 'Video': this.PVideo, 'Plano': this.PPlano } });
  }

  backPage() {
    this.router.navigate(['/web']);
  }

} 