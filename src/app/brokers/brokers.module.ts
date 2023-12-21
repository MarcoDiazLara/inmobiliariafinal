import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrokersRoutingModule } from './brokers-routing.module';
import { BrokersComponent } from './brokers.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';


/*tablas */
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { NotificacionbrokerComponent } from './notificacionbroker/notificacionbroker.component';
import { BrokerpasswordComponent } from './brokerpassword/brokerpassword.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PerfilbrokersComponent } from './perfilbrokers/perfilbrokers.component';
import { AltaAsesorComponent } from './alta-asesor/alta-asesor.component';
import { BrokersAsignarReasignarComponent } from './brokers-asignar-reasignar/brokers-asignar-reasignar.component';
import { BroAsignarAsesorComponent } from './ventanaemerge/bro-asignar-asesor/bro-asignar-asesor.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { Citas1Component } from './citas1/citas1.component';
import { InvesntarioComponent } from './invesntario/invesntario.component';
import { VentanadetallesInmuebleComponent } from './ventanadetalles-inmueble/ventanadetalles-inmueble.component';
import { CatalogoinmuebleComponent } from './catalogoinmueble/catalogoinmueble.component';
import { GoogleMapsModule } from '@angular/google-maps';

// lenguaje
import localeEs from '@angular/common/locales/es';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import { FechashitoComponent } from './fechashito/fechashito.component';
import { AsignarReasignarUsersComponent } from './asignar-reasignar-users/asignar-reasignar-users.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    PerfilbrokersComponent,
    BrokersComponent,
    NotificacionbrokerComponent,
    BrokerpasswordComponent,
    AltaAsesorComponent,
    BrokersAsignarReasignarComponent,
    BroAsignarAsesorComponent,
    CalendarioComponent,
    Citas1Component,
    InvesntarioComponent,
    VentanadetallesInmuebleComponent,
    CatalogoinmuebleComponent,
    
    FechashitoComponent,
    AsignarReasignarUsersComponent,



  ],
  imports: [
    CommonModule,
    BrokersRoutingModule,
    CommonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
    MatCheckboxModule,    
    MatPaginatorModule,
    MatDialogModule,
    MatMenuModule,
    GoogleMapsModule,
    MatNativeDateModule


  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es' }, // Establece el idioma predeterminado
  ],
})
export class BrokersModule { }
