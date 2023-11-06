import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrokersRoutingModule } from './brokers-routing.module';
import { BrokersComponent } from './brokers.component';
import { PerfilbrokersComponent } from './perfilbrokers/perfilbrokers.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
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
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ErrorStateMatcher, MatNativeDateModule } from '@angular/material/core';
import { NotificacionbrokerComponent } from './notificacionbroker/notificacionbroker.component';
import { ReasignarasesoresComponent } from './reasignarasesores/reasignarasesores.component';
import { BrokerpasswordComponent } from './brokerpassword/brokerpassword.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { AltaAsesorComponent } from './alta-asesor/alta-asesor.component';
/end/

@NgModule({
  declarations: [
    PerfilbrokersComponent,
    BrokersComponent,
    NotificacionbrokerComponent,
    ReasignarasesoresComponent,
    CalendarioComponent,
    BrokerpasswordComponent,
    AltaAsesorComponent,
    
  
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
    MatDialogModule,


  ]
})
export class BrokersModule { }
