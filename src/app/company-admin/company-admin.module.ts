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
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

/*tablas */
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { CompanyAdminpasswordComponent } from './ventanaemergente/company-adminpassword/company-adminpassword.component';
import { PerfilcompanyAdminComponent } from './perfilcompany-admin/perfilcompany-admin.component';
import { AltaBrokersComponent } from './alta-brokers/alta-brokers.component';
import { NotificacionescompanyAdminComponent } from './notificacionescompany-admin/notificacionescompany-admin.component';
import { CompanyAsignarReasignarComponent } from './company-asignar-reasignar/company-asignar-reasignar.component';
import { CompAsignarAsesorComponent } from './ventanaemergente/comp-asignar-asesor/comp-asignar-asesor.component';
/end/

@NgModule({
  declarations: [
    CompanyAdminComponent,
    CompanyAdminpasswordComponent,
    PerfilcompanyAdminComponent,
    AltaBrokersComponent,
    NotificacionescompanyAdminComponent,
    CompanyAsignarReasignarComponent,
    CompAsignarAsesorComponent,
  
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
    MatDialogModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgIf,
    NgFor, 
    MatMenuModule, 
  ]
})
export class CompanyAdminModule { }
