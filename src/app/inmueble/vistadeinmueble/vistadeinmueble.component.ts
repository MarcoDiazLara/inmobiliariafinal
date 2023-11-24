import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http/http.service';
import { Inmuebles, inmueblesBuscados } from 'src/app/services/Interface/Interfaces';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatRadioButton } from '@angular/material/radio';


@Component({
  selector: 'app-vistadeinmueble',
  templateUrl: './vistadeinmueble.component.html',
  styleUrls: ['./vistadeinmueble.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('in => out', animate('200ms ease-out')),
      transition('out => in', animate('200ms ease-in')),
    ]),
  ],

})

export class VistadeinmuebleComponent implements OnInit {
  ///////// NO MOVER LA FUNCION DE OCULTAR Y MOSTRAR LAS LISTAS DE LOS BOTONES DE LA BUSQUEDA ///////////////
  paginaActual = 1; // Página actual
  elementosPorPagina = 8; // Número de elementos por página

  panelOpenState = false;
  
  showBuscar: boolean = false;
  showPrecio: boolean = false;
  showToferta: boolean = false;
  showInmueble: boolean = false;
  showRecamaras: boolean = false;
  showFilters: boolean = false;

  toggleBuscar(){
    this.showBuscar = !this.showBuscar;
    // Cierra los otros elementos
    this.showPrecio = false;
    this.showToferta = false;
    this.showInmueble = false;
    this.showRecamaras = false;
    this.showFilters = false;
  }

  togglePrecio(){
    this.showPrecio = !this.showPrecio;
    // Cierra los otros elementos
    this.showBuscar = false;
    this.showToferta = false;
    this.showInmueble = false;
    this.showRecamaras = false;
    this.showFilters = false;
  }
  toggleToferta(){
    this.showToferta = !this.showToferta;
     // Cierra los otros elementos
    this.showBuscar = false;
    this.showPrecio = false;
    this.showInmueble = false;
    this.showRecamaras = false;
    this.showFilters = false;
  }
  toggleInmueble(){
    this.showInmueble = !this.showInmueble;
    // Cierra los otros elementos
    this.showBuscar = false;
    this.showPrecio = false;
    this.showToferta = false;
    this.showRecamaras = false;
    this.showFilters = false;
  }
  toggleRecamaras(){
    this.showRecamaras = !this.showRecamaras;
    // Cierra los otros elementos
    this.showBuscar = false;
    this.showPrecio = false;
    this.showToferta = false;
    this.showInmueble = false;
    this.showFilters = false;
  }
  toggleFilters() {
    this.showFilters = !this.showFilters;
    // Cierra los otros elementos
    this.showBuscar = false;
    this.showPrecio = false;
    this.showToferta = false;
    this.showInmueble = false;
    this.showRecamaras = false;
  }
  

  ///////////////////////////////////////////// AQUI TERMINA XD //////////////////////////////////////
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
  
//   /*tipoinmuebles almacena el valor del tipo de inmueble casa, departamento, etc. */
//   tipoinmuebles = '';
//  /*Almacena el id del municipio sleccionado*/
//   estadoSeleccionado:any | null ='';
//   /*Almacena el id del tipoInmueble*/
//   seleccionIdTipoInmueble:any | null='';
// /*OPCIONES PARA LAS RECAMARAS */
  opcion1:any;

  

  //Municipio Seleccionado en el input
  selectedMunicipio: any;

  idMunicipio:any | null ='';
  municipio:any | null =''; //valor que se almacena en el localStorage
  id_Tipo_Inmueble:any | null ='';// Valor que se almacena en el localStorage
  idTipoInmueble:any | null ='';

  title = 'ProyectoPrueba';

 
  
  // Definir un arreglo de opciones


  action: String | undefined;
  tpropiedad!: Number;
  ubicacion!: String;

  tippropiedad: String | undefined;
  bandera!: number;
  tipoP!: number;



  constructor(private el: ElementRef, private router: Router, private http: HttpService, private renderer: Renderer2, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    
    
  
  }

  
  detalles(id_inmu: any, id_usu : any) {

    //console.log(id_inmu,id_usu);
    this.router.navigate(['/inmueble/detalles'], { queryParams: { 'id_inmueble': id_inmu, 'id_usuario': id_usu, 'tpropiedad' : this.tpropiedad, 'ubicacion' : this.ubicacion, 'bandera': this.bandera,'tipoP': this.tipoP } });

  }

  seleccionarItem(item: any) {
    this.selectedMunicipio = item;

    console.log(item);
  }
  
  mostrarIDMunicipio(idM: number): void {
    this.idMunicipio = idM;
    this.toggleBuscar();
    localStorage.setItem("id_Municipio",this.idMunicipio);


    if(this.id_Tipo_Inmueble.value == null)
    localStorage.setItem("id_Tipo_Inmueble", '');
    else 'hola';

    console.log(this.idMunicipio, this.id_Tipo_Inmueble.value);

  }
  mostrarIDTipoInmueble(idTipo:number): void{
    this.idTipoInmueble=idTipo;
    this.toggleInmueble();
    localStorage.setItem("id_Tipo_Inmueble", this.idTipoInmueble);

    if(this.idMunicipio.value == null)
    localStorage.setItem("id_Municipio", '');
    else 'hola';
    console.log( this.idTipoInmueble);

    this.limpiarFiltros()
    
    

    //this.municipio = localStorage.getItem("id_Municipio");
    this.id_Tipo_Inmueble= localStorage.getItem("id_Tipo_Inmueble")

    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action':'', 'tpropiedad': this.id_Tipo_Inmueble, 'ubicacion': ''} });

    this.http.busquedaAvanzada('', this.id_Tipo_Inmueble , '',  '', '', '', '').subscribe((datos: any) => {

    
    // this.http.busquedaAvanzada(this.inmueble.ubicacion, this.inmueble.inmueble , '2',  '', '', '', this.ubicacion).subscribe((data: any) => {

     
    this.datosInmueble =datos ;

    });

    // console.log(item);

  }

  mostrarRecamaras(recamara:number): void{
    this.opcion1=recamara;
    this.toggleInmueble();

    localStorage.setItem("Recamas", this.opcion1);

    // if(this.idMunicipio.value == null)
    // localStorage.setItem("id_Municipio", '');
    // else 'hola';
    // console.log( this.idTipoInmueble);

    this.limpiarFiltros()
    
    

    
    //this.id_Tipo_Inmueble= localStorage.getItem("Recamas")

    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action':'', 'tpropiedad': this.id_Tipo_Inmueble, 'ubicacion': ''} });

    this.http.busquedaAvanzada('', this.id_Tipo_Inmueble ,this.opcion1 ,  '', '', '', '').subscribe((datos: any) => {

     
    this.datosInmueble =datos ;

    });

    // console.log(item);

  }
  
  
  limpiarCampos(){

  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      console.log('Query Params: ', params);

      this.action = params['action'];
      this.tpropiedad = params['tpropiedad'];
      this.ubicacion = params['ubicacion'];
      this.bandera = params['bandera'];
      this.tipoP = params['tipoP'];

      console.log('Action: ', this.action);
      console.log('Propiedad: ', this.tpropiedad);
      console.log('Ubicacion: ', this.ubicacion);

      

    });

   
    
    if(this.bandera == 4){
      this.http.InmuRecientes(this.ubicacion, this.tpropiedad).subscribe((resp: any) => {
        this.datosInmueble = resp;
      })
    } else if (this.bandera == 1){
      this.http.RentaDepReci(this.ubicacion, 2).subscribe((resp:any) => {
        this.datosInmueble = resp;
      })

    }else if (this.bandera == 2){
      this.http.BajoPrecInmu(this.ubicacion, this.tpropiedad).subscribe((resp:any)=>{
        this.datosInmueble = resp;
      })
    }else if(this.bandera == 3){
        this.http.Remates(this.ubicacion, this.tpropiedad).subscribe((resp: any) => {
          this.datosInmueble = resp;
        })
    } else if (this.bandera == 13){
      this.http.MenuFiltros(this.ubicacion, this.tpropiedad,this.tipoP).subscribe((resp:any)=> {

        this.datosInmueble = resp;
        

      })
    }else { 
      this.http.mostrarInmuebles(this.ubicacion, this.tpropiedad).subscribe((resp: any) => {

        this.datosInmueble = resp;
        
      }); 
  
      // this.http.busquedaAvanzada('',this.tpropiedad,'','','','',this.ubicacion).subscribe((data:any)=>{
        
      //   this.datosInmueble = data;
  
      // });
    }

    


    // this.http.mostrarInmuebles(this.ubicacion, this.tpropiedad).subscribe((resp: any) => {

    //   this.datosInmueble = resp;
      
    // }); 

    


    this.http.mostrarTipoInmueble().subscribe((data: any) => {

      this.datosTipoInmueble = data;
      console.log(data);

    });

    

  }

  ResultadoosBusquedaC() {
    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action': 'compra', 'tpropiedad': this.tpropiedad, 'ubicacion': this.ubicacion} });
  }

  mostrarMunicipios() {
    this.http.mostrarMunicipios(this.selectedMunicipio).subscribe((data: any) => {
      if (Array.isArray(data)) {
      this.datosMunicipios = data;
      }
      else {
        console.error('La respuesta del servicio no es un array:', data);
      } 
    });
  }


  mostrarDatosInmueble()
  {
    this.http.mostrarTipoInmueble().subscribe((data: any) => {

      this.datosTipoInmueble = data;

    });

  }
  //   mostrarIDMunicipio(id: number): void {
  //   console.log(id);
  // }

 



  
  back() {
    this.router.navigate(["/web"]);
  }

  /*botonSeleccionado(opcion:number){
    console.log( 'El usuario mostro:'opcion );
  }*/
  limpiarFiltros(){
    this.datosInmueble = [];
  }



  mostrar() {


    this.limpiarFiltros()
    
    

    this.municipio = localStorage.getItem("id_Municipio");
    //this.id_Tipo_Inmueble= localStorage.getItem("id_Tipo_Inmueble")

    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action':'', 'tpropiedad': 0, 'ubicacion': this.municipio} });

    this.http.busquedaAvanzada(this.municipio, this.id_Tipo_Inmueble , '',  '', '', '', '').subscribe((datos: any) => {

    
    // this.http.busquedaAvanzada(this.inmueble.ubicacion, this.inmueble.inmueble , '2',  '', '', '', this.ubicacion).subscribe((data: any) => {

     
    this.datosInmueble =datos ;

    });


    const itemsToRemove =[
      "id_Municipio",
      "id_Tipo_Inmueble"
    ];
    itemsToRemove.forEach( item => {
      localStorage.removeItem(item);
    });

              
    }
/// este es el codigo del paginador de los resultados///
paginaAnterior() {
  if (this.paginaActual > 1) {
    this.paginaActual--;
    this.scrollToTop(); 
  }
}

paginaSiguiente() {
  if (this.paginaActual < this.totalPaginas()) {
    this.paginaActual++;
    this.scrollToTop(); 
  }
}

totalPaginas(): number {
  return Math.ceil(this.datosInmueble.length / this.elementosPorPagina);
}
scrollToTop() {
  window.scrollTo(0, 0);
}

/// aqui termina el codigo del paginador de los resultados///

}


