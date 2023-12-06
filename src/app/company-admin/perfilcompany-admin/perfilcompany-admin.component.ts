import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup, } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder } from '@angular/forms';
import { infoUsuario } from 'src/app/services/Interface/Interfaces';
import { CompanyAdminpasswordComponent } from '../ventanaemergente/company-adminpassword/company-adminpassword.component';

@Component({
  selector: 'app-perfilcompany-admin',
  templateUrl: './perfilcompany-admin.component.html',
  styleUrls: ['./perfilcompany-admin.component.scss']
})
export class PerfilcompanyAdminComponent  {
  saludo: string = '';

  ngOnInit() {
    const fecha = new Date();
    const hora = fecha.getHours();

    if (hora >= 0 && hora < 12) {
      this.saludo = '¡Buenos días!';
    } else if (hora >= 12 && hora < 18) {
      this.saludo = '¡Buenas tardes!';
    } else {
      this.saludo = '¡Buenas noches!';
    }
  }
 

  constructor(

  ) { }

 

}
