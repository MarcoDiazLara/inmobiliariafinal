import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmuebleRoutingModule } from './inmueble-routing.module';
import { WebModule } from '../web/web.module';
import { VentanacitaComponent } from './ventanacita/ventanacita.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MenuinmuebleComponent } from './menuinmueble/menuinmueble.component';
import { AvisosComponent } from './avisos/avisos.component';
import { InteresadosComponent } from './interesados/interesados.component';
import { ContratosComponent } from './contratos/contratos.component';









@NgModule({
  declarations: [
    
  
   
  
    MenuinmuebleComponent,
                      AvisosComponent,
                      InteresadosComponent,
                      ContratosComponent
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
