import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';


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
import { ClientepasswordComponent } from './ventanaemergente/clientepassword/clientepassword.component';
import { NotificacionesclienteComponent } from './notificacionescliente/notificacionescliente.component';
import { CambioasesorclienteComponent } from './cambioasesorcliente/cambioasesorcliente.component';
import { PerfilclienteComponent } from './perfilcliente/perfilcliente.component';





import { NgFor } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormGroup, } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder } from '@angular/forms';
/end/
import { WebModule } from '../web/web.module';
import { MenuComponent } from '../web/menu/menu.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';






@NgModule({
  declarations: [
    ClienteComponent,
    ClientepasswordComponent,
    NotificacionesclienteComponent,
    CambioasesorclienteComponent,
    CalendarioComponent,
    DialogComponent,
    PerfilclienteComponent,
    

  ],
  imports: [
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
    WebModule,
    ClienteRoutingModule,
    MatDialogModule
    
    
  ],
  exports:[
    ClienteComponent 
  ],

})
export class ClienteModule { }


