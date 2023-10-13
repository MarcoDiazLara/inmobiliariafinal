import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

import { BuscadorComponent } from './buscador/buscador.component';
import { AtajosComponent } from './atajos/atajos.component';
import { DescargaComponent } from './descarga/descarga.component';

import { MenugloguedoComponent } from '../menugloguedo/menugloguedo.component';

import { ContactoComponent } from './contacto/contacto.component';
import { ParticulaComponent } from './particula/particula.component';
import { InmobiliariacorredorComponent } from './inmobiliariacorredor/inmobiliariacorredor.component';
import { ConstructoradesarrolladoraComponent } from './constructoradesarrolladora/constructoradesarrolladora.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapsComponent } from './maps/maps.component';
import { ClienteComponent } from '../cliente/cliente.component';
import { BlogComponent } from './blog/blog.component';
import { GuiarentarComponent } from './guiarentar/guiarentar.component';
import { RematehipotecarioComponent } from './rematehipotecario/rematehipotecario.component';





@NgModule({
  declarations: [
    WebComponent,
    FooterComponent,
    MenuComponent,
    BuscadorComponent,
    AtajosComponent,
    DescargaComponent,
    MenugloguedoComponent,
    ContactoComponent,
    ParticulaComponent,
    InmobiliariacorredorComponent,
    ConstructoradesarrolladoraComponent,
    MapsComponent,
    BlogComponent,
    GuiarentarComponent,
    // RematehipotecarioComponent,
     
      
      
     



  ],
  imports: [
    CommonModule,
    
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
     ReactiveFormsModule,
     WebRoutingModule,
     
  ],
  exports:[
    WebComponent,
    FooterComponent,
    DescargaComponent,
    MenuComponent
    
  ],

})
export class WebModule { }
