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
import { LikeComponent } from './like/like.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { LikegraficaComponent } from './likegrafica/likegrafica.component';


@NgModule({
  declarations: [
    MenuinmuebleComponent,
    AvisosComponent,
 InteresadosComponent,
 ContratosComponent,
 LikeComponent,
 LikegraficaComponent
  ],
  imports: [
    
    CommonModule,
    InmuebleRoutingModule,
    WebModule,
    VentanacitaComponent,
    GoogleMapsModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatMenuModule,
    MatButtonModule



 
  ],
  exports: [
    WebModule
  ]
})
export class InmuebleModule { }
