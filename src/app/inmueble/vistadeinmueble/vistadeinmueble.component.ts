import { Component, OnInit, Renderer2 } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http/http.service';


@Component({
  selector: 'app-vistadeinmueble',
  templateUrl: './vistadeinmueble.component.html',
  styleUrls: ['./vistadeinmueble.component.css'],

})
export class VistadeinmuebleComponent implements OnInit {


  
  panelOpenState = false;

  control = new FormControl('');
  streets: string[] = [
    'Guarderia', 'Escuela', 'Gimnasio', 'Centro comercial',
    'Farmacia', 'Hospital publico', 'privado', 'Parques',
    'Mercado', 'Unidad Deportiva', 'Roof Garden', 'Jardines',
    'Salón social', 'Bussines center', 'Biblioteca', 'Áreas deportivas',
    'Cisterna', 'Amueblado', 'Jardin', 'Cochera',
    'Internet', 'wi-fi', 'Salón Social', 'Biblioteca'];
  filteredStreets: Observable<string[]>;
  firstFormGroup!: FormGroup;
  datosInmueble: any[] = [];
  datosMunicipios: any[] = [];
  datosTipoInmueble: any[] = [];
  municipios = '';
  tipoinmuebles = '';
  data: any = {
    ubicacion: '',
    inmueble: '',
    tipoAccion: '',
    precioHasta: '',
    precioDesde: ''
  }

  title = 'ProyectoPrueba';
  public showPrecio: boolean = false;
  public showToferta: boolean = false;
  public showInmueble: boolean = false;
  public showRecamaras: boolean = false;
  public showSearch: boolean = false;
  public showPrecioEjemplo: boolean = false;
  public showFiltros: boolean = false;
  public showEntretenimiento: boolean = false;


  selectedValue = '';
  municipioSeleccionado: string = '';
  // Definir un arreglo de opciones


  action: String | undefined;
  tpropiedad!: Number;
  ubicacion!: String;




  constructor(private el: ElementRef, private router: Router, private http: HttpService, private renderer: Renderer2, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.filteredStreets = new Observable<string[]>();
  }

  

  @HostListener('document:click', ['$event'])


  onDocumentClick(event: MouseEvent) {
    // Verifica si el clic no fue dentro del botón de Precio ni dentro de la lista de Precio
    if (!this.el.nativeElement.querySelector('.navbar').contains(event.target) &&
      !this.el.nativeElement.querySelector('.dropdown-precio, .dropdown-Toferta, .dropdown-inmueble, .dropdown-Recamaras, .dropdown-search, .dropdown-Filtros').contains(event.target)) {
      // Si se hizo clic fuera del botón y fuera de la lista de Precio, oculta la lista
      this.showPrecio = false;
      this.showToferta = false;
      this.showInmueble = false;
      this.showRecamaras = false;
      this.showSearch = false;
      this.showFiltros = false;


    }
  }

  /*onDocumentClick(event: Event): void {
    // Aquí puedes realizar acciones cuando se hace clic en cualquier lugar del documento.
    // Puedes verificar si el clic ocurrió dentro de un elemento específico utilizando el método `contains`.

    if (!this.el.nativeElement.contains(event.target)) {
      // El clic ocurrió fuera del elemento del componente.
      // Puedes realizar acciones específicas en este caso.
    }
  }*/


  // Función para mostrar/ocultar la lista de Precio
  toggleEntertaiment() {
    this.showEntretenimiento = !this.showEntretenimiento;
  }



  // Función para mostrar/ocultar la lista de Precio
  togglePrecio() {
    this.showPrecio = !this.showPrecio;
    // Oculta las otras listas
    this.showToferta = false;
    this.showInmueble = false;
    this.showRecamaras = false;
    this.showSearch = false;
    this.showFiltros = false;
  }

  // Función para mostrar/ocultar la lista de Tipo de Oferta
  toggleToferta() {
    this.showToferta = !this.showToferta;
    // Oculta las otras listas
    this.showPrecio = false;
    this.showInmueble = false;
    this.showRecamaras = false;
    this.showSearch = false;
    this.showFiltros = false;
  }

  // Función para mostrar/ocultar la lista de Inmueble
  toggleInmueble() {
    this.showInmueble = !this.showInmueble;
    // Oculta las otras listas
    this.showPrecio = false;
    this.showToferta = false;
    this.showRecamaras = false;
    this.showSearch = false;
    this.showFiltros = false;
  }

  // Función para mostrar/ocultar la lista de Recamaras
  toggleRecamaras() {
    this.showRecamaras = !this.showRecamaras;
    // Oculta las otras listas
    this.showPrecio = false;
    this.showToferta = false;
    this.showInmueble = false;
    this.showSearch = false;
    this.showFiltros = false;
  }

  // Función para mostrar/ocultar la barra de resultados de escritura en busqueda
  toggleSearch() {
    this.showSearch = !this.showSearch;
    // Oculta las otras listas
    this.showPrecio = false;
    this.showToferta = false;
    this.showInmueble = false;
    this.showRecamaras = false;
    this.showFiltros = false;


  }
  getDireccion(direccion: string) {
    console.log(direccion);

    this.mostrar();

  }

  selectOption(value: string) {
    this.selectedValue = value;
    this.showSearch = false;
  }



  // Función para mostrar/ocultar la barra de resultados de escritura en busqueda
  toggleFiltros() {
    this.showFiltros = !this.showFiltros;
    // Oculta las otras listas
    this.showPrecio = false;
    this.showToferta = false;
    this.showInmueble = false;
    this.showRecamaras = false;
    this.showSearch = false;
  }



  detalles() {
    this.router.navigate(['/inmueble/detalles']);

  }


  // Función para el autocompletado de las caracteristicas en el boton de filtros avanzados
  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      console.log('Query Params: ', params);

      this.action = params['action'];
      this.tpropiedad = params['tpropiedad'];
      this.ubicacion = params['ubicacion'];

      console.log('Action: ', this.action);
      console.log('Propiedad: ', this.tpropiedad);
      console.log('Ubicacion: ', this.ubicacion);

      this.firstFormGroup = this.formBuilder.group({
        pDireccion: ['', [Validators.required]]

      });

      

    });

    this.http.mostrarInmuebles(this.ubicacion, this.tpropiedad).subscribe((data: any) => {

      this.datosInmueble = data;

    });


    this.http.mostrarTipoInmueble().subscribe((data: any) => {

      this.datosTipoInmueble = data;

    });

   

  }

  


  // Función para el autocompletado de las caracteristicas en el boton de filtros avanzados
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }


  // Función para el autocompletado de las caracteristicas en el boton de filtros avanzados
  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  mostrarMunicipios() {
    this.http.mostrarMunicipios(this.municipios).subscribe((data: any) => {

      this.datosMunicipios = data;

    });
  }

  mostrarIDMunicipio(id: number): void {
    console.log(id);
  }

  obtenerValorInput() {
    const inputElement = document.getElementById('miInput') as HTMLInputElement;
    if (inputElement) {
      const valorInput = inputElement.value;
      console.log(valorInput);
    }
  }



  seleccionarMunicipio(municipios: string) {
    this.municipioSeleccionado = municipios;
  }
  back() {
    this.router.navigate(["/web"]);
  }
  /*botonSeleccionado(opcion:number){
    console.log( 'El usuario mostro:'opcion );
  }*/

  mostrar() {



    this.http.busquedaAvanzada(this.data.ubicacion, '', '', '', '', '', '', 'compra', '', '').subscribe((data: any) => {
      /*let mostrar = JSON.stringify(data);
      alert(mostrar);*/





      this.datosInmueble = [];

      this.datosInmueble = data;



    });
  }

}

