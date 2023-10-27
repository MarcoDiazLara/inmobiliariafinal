import { Component, OnInit, Renderer2 } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http/http.service';
import { inmueblesBuscados } from 'src/app/services/Interface/Interfaces';


@Component({
  selector: 'app-vistadeinmueble',
  templateUrl: './vistadeinmueble.component.html',
  styleUrls: ['./vistadeinmueble.component.css'],

})

export class VistadeinmuebleComponent implements OnInit {

  panelOpenState = false;
  
  showFilters: boolean = false;

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }
  
  control = new FormControl('');
  

  firstFormGroup!: FormGroup;
  precios!: FormGroup
 // registerForm: FormGroup;
  
  datosInmueble: inmueblesBuscados[] = [];
  /*datosMunicipios  llena la lista de busqueda de todos los municipios*/
  datosMunicipios: any[] = [];
  /*datosTipoInmueble llena el comboBox con los tipos de inmuebles */
  datosTipoInmueble: any[] = [];
  /*municipios almacena el valor del municpio= San Martin Tex,etc */
  municipios = '';
  /*tipoinmuebles almacena el valor del tipo de inmueble casa, departamento, etc. */
  tipoinmuebles = '';
 /*Almacena el id del municipio sleccionado*/
  estadoSeleccionado:any | null ='';
  /*Almacena el id del tipoInmueble*/
  seleccionIdTipoInmueble:any | null='';

  inmueble: any = {
    ubicacion: '',
    recamaras: '',
    inmueble: '',
    precioHasta: '',
    precioDesde: '',
    tipoAccion: '',
    bano:'',
    estacionamiento:''
    

  }

  title = 'ProyectoPrueba';


  selectedValue = '';
  municipioSeleccionado: string = '';
  // Definir un arreglo de opciones


  action: String | undefined;
  tpropiedad!: Number;
  ubicacion!: String;

  tippropiedad: String | undefined;



  constructor(private el: ElementRef, private router: Router, private http: HttpService, private renderer: Renderer2, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    
  }

  
  detalles(id_inmu: any, id_usu : any) {

    //console.log(id_inmu,id_usu);
    this.router.navigate(['/inmueble/detalles'], { queryParams: {  'id_inmueble': id_inmu, 'id_usuario': id_usu} });

  }


  

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      console.log('Query Params: ', params);

      this.action = params['action'];
      this.tpropiedad = params['tpropiedad'];
      this.ubicacion = params['ubicacion'];

      console.log('Action: ', this.action);
      console.log('Propiedad: ', this.tpropiedad);
      console.log('Ubicacion: ', this.ubicacion);

    });

    this.firstFormGroup = this.formBuilder.group({
      ubicacion: ['',[Validators.required]],
      Id_Tipo_Inmueble: ['', [Validators.required]],
      pAccion :['', [Validators.required]],
      pRecamaras: ['', [Validators.required]]
      

    });
    this.precios = this.formBuilder.group({
      pDesde: ['',[Validators.required]],
      pHasta: ['',[Validators.required]]
    })

    
    

    this.http.mostrarInmuebles(this.ubicacion, this.tpropiedad).subscribe((resp: any) => {

      this.datosInmueble = resp;
      
    }); 

    this.http.busquedaAvanzada('',this.tpropiedad,'','','','',this.ubicacion).subscribe((data:any)=>{
      
      this.datosInmueble = data;

    });


    this.http.mostrarTipoInmueble().subscribe((data: any) => {

      this.datosTipoInmueble = data;

    });

   

    //let datosBusqueda = 


  }

  ResultadoosBusquedaC() {
    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action': 'compra', 'tpropiedad': this.tpropiedad, 'ubicacion': this.ubicacion} });
  }

  mostrarMunicipios() {
    this.http.mostrarMunicipios(this.municipios).subscribe((data: any) => {

      this.datosMunicipios = data;

    });
  }

  mostrarIDMunicipio(id: number): void {
    console.log(id);
  }

 



  seleccionarMunicipio(municipios: string) {
    this.municipioSeleccionado = municipios;

    console.log(municipios);
  
  }
  back() {
    this.router.navigate(["/web"]);
  }
  /*botonSeleccionado(opcion:number){
    console.log( 'El usuario mostro:'opcion );
  }*/

  mostrar() {


    this.datosInmueble = [];

    this.http.busquedaAvanzada(this.inmueble.ubicacion, this.inmueble.inmueble , '2',  '', '', '', this.ubicacion).subscribe((data: any) => {

      /*let mostrar = JSON.stringify(data);
      alert(mostrar);*/
      console.log(this.inmueble);

    data= this.datosInmueble ;

  


      /*this.http.busquedaAvanzada(this.data.ubicacion,'',this.data.tpropiedad,'','','','',this.data.action,'','').subscribe((data: any) => {
        let mostrar = JSON.stringify(data);
        alert(mostrar);

      location.reload();
    
      this.datosInmueble =[];*/

                });
              
    }
//Muestra la seleccion del select**
    cambioTpropiedad(tprop:string){
      console.log('Selecciona Propiedad: ',tprop);
      this.tippropiedad = tprop;

}
}
