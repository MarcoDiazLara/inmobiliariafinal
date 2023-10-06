import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmuebleRoutingModule } from './inmueble-routing.module';
import { WebModule } from '../web/web.module';

import { DetallesCarruselComponent } from './detalles/detalles-carrusel/detalles-carrusel.component';






@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    InmuebleRoutingModule,
    WebModule,
    
     
 
  ]
})
export class InmuebleModule { }
