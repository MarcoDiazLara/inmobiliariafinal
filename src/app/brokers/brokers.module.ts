import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrokersRoutingModule } from './brokers-routing.module';
import { BrokersComponent } from './brokers.component';
import { PerfilbrokersComponent } from './perfilbrokers/perfilbrokers.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

/*tablas */
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ErrorStateMatcher, MatNativeDateModule } from '@angular/material/core';
import { NotificacionbrokerComponent } from './notificacionbroker/notificacionbroker.component';
import { ProspectosComponent } from './prospectos/prospectos.component';
import { ReasignarasesoresComponent } from './reasignarasesores/reasignarasesores.component';
import { AgendarcitaComponent } from './agendarcita/agendarcita.component';
import { BrokerpasswordComponent } from './brokerpassword/brokerpassword.component';
import { CalendarioComponent } from './calendario/calendario.component';
/end/

@NgModule({
  declarations: [
    BrokersComponent,
   
    NotificacionbrokerComponent,
    ProspectosComponent,
    ReasignarasesoresComponent,
    CalendarioComponent,
    
  
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
    MatPaginatorModule,
    MatFormFieldModule,
    BrokerpasswordComponent,
    PerfilbrokersComponent,
    AgendarcitaComponent,
  ]
})
export class BrokersModule { }
