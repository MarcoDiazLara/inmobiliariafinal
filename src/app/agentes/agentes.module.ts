import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentesRoutingModule } from './agentes-routing.module';
import { MenuComponent } from './menu/menu.component';
import { PerfilComponent } from './perfil/perfil.component';

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
import { AgentesComponent } from './agentes.component';
/end/




@NgModule({
  declarations: [
    AgentesComponent,
    MenuComponent,
    PerfilComponent,
    
  ],
  imports: [
    CommonModule,
    AgentesRoutingModule,
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
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AgentesModule { }
