import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmuebleRoutingModule } from './inmueble-routing.module';
import { WebModule } from '../web/web.module';








@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    InmuebleRoutingModule,
    WebModule
 
  ],
  exports: [
    WebModule
  ]
})
export class InmuebleModule { }
