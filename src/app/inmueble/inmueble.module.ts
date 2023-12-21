import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmuebleRoutingModule } from './inmueble-routing.module';
import { WebModule } from '../web/web.module';
import { VentanacitaComponent } from './ventanacita/ventanacita.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MenuinmuebleComponent } from './menuinmueble/menuinmueble.component';
import { AvisosComponent } from './avisos/avisos.component';

import { ContratosComponent } from './contratos/contratos.component';
import { LikeComponent } from './like/like.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { LikegraficaComponent } from './likegrafica/likegrafica.component';
import { InformacioninmuebleComponent } from './informacioninmueble/informacioninmueble.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatStepperModule} from '@angular/material/stepper';
import { MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { PlanesComponent } from './planes/planes.component';
import {MatRadioModule} from '@angular/material/radio';
import { Requisitos3dComponent } from './requisitos3d/requisitos3d.component';

registerLocaleData(localeEs);
@NgModule({
  declarations: [
    MenuinmuebleComponent,
    AvisosComponent,
    ContratosComponent,
    LikeComponent,
    LikegraficaComponent,
    InformacioninmuebleComponent,
    PlanesComponent,
    Requisitos3dComponent
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
    MatButtonModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
   providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es' }, // Establece el idioma predeterminado
  ],
  exports: [
    WebModule
  ]
})
export class InmuebleModule { }
