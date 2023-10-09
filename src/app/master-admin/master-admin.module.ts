import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterAdminRoutingModule } from './master-admin-routing.module';
import { MasterAdminComponent } from './master-admin.component';

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
import {EliminarasesoresComponent} from './eliminarasesores/eliminarasesores.component';





@NgModule({
  declarations: [
  MasterAdminComponent,
  EliminarasesoresComponent,
  
],
  imports: [
    CommonModule,
    MasterAdminRoutingModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    MatStepperModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule
    
    
  ]
})
export class MasterAdminModule { }
