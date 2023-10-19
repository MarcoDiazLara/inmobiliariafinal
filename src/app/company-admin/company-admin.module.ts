import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyAdminRoutingModule } from './company-admin-routing.module';
import { CompanyAdminComponent } from './company-admin.component';


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
import { AltaBrokersComponent } from './alta-brokers/alta-brokers.component';
import { PerfilcompanyAdminComponent } from './perfilcompany-admin/perfilcompany-admin.component';
/end/

@NgModule({
  declarations: [
    CompanyAdminComponent,
    PerfilcompanyAdminComponent,
    // AltaBrokersComponent,
    // AltasocioComponent,
  ],
  imports: [
    CommonModule,
    CompanyAdminRoutingModule,
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
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
  ]
})
export class CompanyAdminModule { }
