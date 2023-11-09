import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmuebleRoutingModule } from './inmueble-routing.module';
import { WebModule } from '../web/web.module';
import { VentanacitaComponent } from './ventanacita/ventanacita.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MenuinmuebleComponent } from './menuinmueble/menuinmueble.component';









@NgModule({
  declarations: [
    
  
   
  
    MenuinmuebleComponent
  ],
  imports: [
    CommonModule,
    InmuebleRoutingModule,
    WebModule,
    VentanacitaComponent,
    GoogleMapsModule
 
  ],
  exports: [
    WebModule
  ]
})
export class InmuebleModule { }
