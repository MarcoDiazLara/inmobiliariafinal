import { Component, OnInit } from '@angular/core';
import {  ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {MatChipsModule} from '@angular/material/chips';





@Component({
  selector: 'app-vistadeinmueble',
  templateUrl: './vistadeinmueble.component.html',
  styleUrls: ['./vistadeinmueble.component.css'],
  
})
export class VistadeinmuebleComponent implements OnInit {
  control = new FormControl('');
  streets: string[] = [
  'Guarderia', 'Escuela', 'Gimnasio', 'Centro comercial',
  'Farmacia', 'Hospital publico', 'privado', 'Parques',
  'Mercado', 'Unidad Deportiva', 'Roof Garden', 'Jardines',
  'Salón social', 'Bussines center', 'Biblioteca', 'Áreas deportivas',
  'Cisterna', 'Amueblado', 'Jardin', 'Cochera',
  'Internet', 'wi-fi', 'Salón Social', 'Biblioteca',




];
  filteredStreets: Observable<string[]>;


  title = 'ProyectoPrueba';
  public showPrecio: boolean = false;
  public showToferta: boolean = false;
  public showInmueble: boolean = false;
  public showRecamaras: boolean = false;
  public showSearch: boolean = false;
  public showPrecioEjemplo: boolean= false;
  public showFiltros: boolean=false;




  constructor( private el: ElementRef, private router:Router) { 
    this.filteredStreets = new Observable<string[]>();
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Verifica si el clic no fue dentro del botón de Precio ni dentro de la lista de Precio
    if (!this.el.nativeElement.querySelector('.navbar').contains(event.target) &&
        !this.el.nativeElement.querySelector('.dropdown-precio, .dropdown-Toferta, .dropdown-inmueble, .dropdown-Recamaras, .dropdown-search., .dropdown-Filtros' ).contains(event.target)) {
      // Si se hizo clic fuera del botón y fuera de la lista de Precio, oculta la lista
      this.showPrecio = false;
      this.showToferta = false;
      this.showInmueble = false;
      this.showRecamaras = false;
      this.showSearch = false;
      this.showFiltros =false;


    }
  }

// Función para mostrar/ocultar la lista de Precio
togglePrecio() {
  this.showPrecio = !this.showPrecio;
  // Oculta las otras listas
  this.showToferta = false;
  this.showInmueble = false;
  this.showRecamaras = false;
  this.showSearch = false;
  this.showFiltros =false;
}

// Función para mostrar/ocultar la lista de Tipo de Oferta
toggleToferta() {
  this.showToferta = !this.showToferta;
  // Oculta las otras listas
  this.showPrecio = false;
  this.showInmueble = false;
  this.showRecamaras = false;
  this.showSearch = false;
  this.showFiltros =false;
}

// Función para mostrar/ocultar la lista de Inmueble
toggleInmueble() {
  this.showInmueble = !this.showInmueble;
  // Oculta las otras listas
  this.showPrecio = false;
  this.showToferta = false;
  this.showRecamaras = false;
  this.showSearch = false;
  this.showFiltros =false;
}

// Función para mostrar/ocultar la lista de Recamaras
toggleRecamaras() {
  this.showRecamaras = !this.showRecamaras;
  // Oculta las otras listas
  this.showPrecio = false;
  this.showToferta = false;
  this.showInmueble = false;
  this.showSearch = false;
  this.showFiltros =false;
}

// Función para mostrar/ocultar la barra de resultados de escritura en busqueda
toggleSearch() {
  this.showSearch = !this.showSearch;
  // Oculta las otras listas
  this.showPrecio = false;
  this.showToferta = false;
  this.showInmueble = false;
  this.showRecamaras = false;
  this.showFiltros =false;
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


detalles(){
  this.router.navigate(['/inmueble/detalles']);
 
}



// Función para el autocompletado de las caracteristicas en el boton de filtros avanzados
ngOnInit(): void {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
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

}

