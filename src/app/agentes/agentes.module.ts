import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentesRoutingModule } from './agentes-routing.module';

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
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';

/*tablas */

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { AgentesComponent } from './agentes.component';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PerfilagentesComponent } from './perfilagentes/perfilagentes.component';
import { AgentepasswordComponent } from './ventanaemergente/agentepassword/agentepassword.component';
import { NotificacionesagentesComponent } from './notificacionesagentes/notificacionesagentes.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { FechaHitoAgentesComponent } from './fecha-hito-agentes/fecha-hito-agentes.component';
import { InventarioagentesComponent } from './inventarioagentes/inventarioagentes.component';
import { InmuebledetallesComponent } from './ventanaemergente/inmuebledetalles/inmuebledetalles.component';
import { Citas1Component } from './citas1/citas1.component';
/end/
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AgentesComponent,
    PerfilagentesComponent,
    AgentepasswordComponent,
    NotificacionesagentesComponent,
  
    FechaHitoAgentesComponent,
    InventarioagentesComponent,
    InmuebledetallesComponent,
    Citas1Component,

    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatStepperModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    AgentesRoutingModule,
    NgFor,
    NgIf,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    MatMenuModule,
    MatCheckboxModule,
    MatDialogModule,
    
    

  ]
})
export class AgentesModule { }
