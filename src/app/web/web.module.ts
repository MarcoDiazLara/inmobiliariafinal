import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
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

import { GoogleMapsModule } from '@angular/google-maps';
import { EvitafraudeComponent } from './evitafraude/evitafraude.component';
import { QuierescomprarComponent } from './quierescomprar/quierescomprar.component';
import { NovedadesactulidadComponent } from './novedadesactulidad/novedadesactulidad.component';
import { QuieresvenderComponent } from './quieresvender/quieresvender.component';
import { InmobiliariasComponent } from './inmobiliarias/inmobiliarias.component';
import { PlanbbComponent } from './planbb/planbb.component';
import { RecorvirtbComponent } from './recorvirtb/recorvirtb.component';
import { DesarrollobComponent } from './desarrollob/desarrollob.component';
import { PlubibComponent } from './plubib/plubib.component';

import { TerminosComponent } from './terminos/terminos.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef,MatDialogTitle,MatDialogContent,MatDialogActions,MatDialogClose,} from '@angular/material/dialog';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';







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
    PlanbbComponent,
    GuiarentarComponent,
    EvitafraudeComponent,
    NovedadesactulidadComponent,
    RematehipotecarioComponent,
    QuieresvenderComponent,
    InmobiliariasComponent,
    RecorvirtbComponent,
    DesarrollobComponent,
    PlubibComponent,
    TerminosComponent,
    

       
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
     ReactiveFormsModule,
     WebRoutingModule,
     GoogleMapsModule,
     QuierescomprarComponent,
     MatFormFieldModule, 
     MatInputModule, 
     FormsModule, 
     MatButtonModule
  ],
  exports:[
    WebComponent,
    FooterComponent,
    DescargaComponent,
    MenuComponent
    
  ],

})
export class WebModule { }
