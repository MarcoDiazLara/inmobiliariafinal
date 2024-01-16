import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { Inmuebles } from 'src/app/services/Interface/Interfaces';
import { TipoOperacion } from 'src/app/services/Interface/Interfaces';

@Component({
  selector: 'app-vistadeinmueble',
  templateUrl: './vistadeinmueble.component.html',
  styleUrls: ['./vistadeinmueble.component.css']
})

export class VistadeinmuebleComponent implements OnInit {

  FilterFormGroup!: FormGroup;
  TInmuebles!: Inmuebles[];
  TOperacion!: TipoOperacion[];

  PAction!: any;
  PPropiedad!: any;
  PUbicacion!: any;


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
      this.PUbicacion = "All";
      if(params['ubicacion'] !== undefined){
        this.PUbicacion = params['ubicacion'];
      } 
    
      console.log('Action', this.PAction);
      console.log('Propiedad', this.PPropiedad);
      console.log('Ubicacion', this.PUbicacion);

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

  }

  backPage() {
    this.router.navigate(['/web']);
  }

} 