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
import { NgFor } from '@angular/common';
import {NgIf} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';


/*tablas */
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {EliminarasesoresComponent} from './eliminarasesores/eliminarasesores.component';
import { AltausuarioComponent } from './altausuario/altausuario.component';
import { AltasocioComponent } from './altasocio/altasocio.component';
import { PerfilmasterAdminComponent } from './perfilmaster-admin/perfilmaster-admin.component';
import { MasterAdminpasswordComponent } from './ventanaemergente/master-adminpassword/master-adminpassword.component';
import { NotificacionesmasterAdminComponent } from './notificacionesmaster-admin/notificacionesmaster-admin.component';
import { MasterAsignarReasignarComponent } from './master-asignar-reasignar/master-asignar-reasignar.component';

import {MatMenuModule} from '@angular/material/menu';
import { AsignasrasesorComponent } from './ventanaemergente/asignasrasesor/asignasrasesor.component';




@NgModule({
  declarations: [
  MasterAdminComponent,
  EliminarasesoresComponent,
  AltasocioComponent,
  AltausuarioComponent,
  PerfilmasterAdminComponent,
  MasterAdminpasswordComponent,
  NotificacionesmasterAdminComponent,
  AsignasrasesorComponent,
  // MasterAsignarReasignarComponent,
  
  
],
  imports: [
    CommonModule,
    MasterAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatCheckboxModule,
    MatNativeDateModule, 
    NgFor,
    NgIf,
    MatDatepickerModule 
  ]
})
export class MasterAdminModule { }
