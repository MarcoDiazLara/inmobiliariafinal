import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterAdminRoutingModule } from './master-admin-routing.module';
import { MasterAdminComponent } from './master-admin.component';
import { AltaBrokersComponent } from './modals/alta-brokers/alta-brokers.component';
import { PerfilComponent } from './perfil/perfil.component';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';

import {MatNativeDateModule} from '@angular/material/core';




@NgModule({
  declarations: [
    MasterAdminComponent,
    AltaBrokersComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    MasterAdminRoutingModule,
    FormControl, 
    FormsModule, 
    ReactiveFormsModule,
    NgFor,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,

 
 
  ]
})
export class MasterAdminModule { }
