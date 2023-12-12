import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {  Inject } from '@angular/core';
import { informaUsuario } from 'src/app/services/Interface/Interfaces';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-informacionusuariosadm',
  templateUrl: './informacionusuariosadm.component.html',
  styleUrls: ['./informacionusuariosadm.component.scss']
})
export class InformacionusuariosadmComponent  {
  datos !: informaUsuario;
  constructor(
    public dialogRef: MatDialogRef<InformacionusuariosadmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpService: HttpService
  ) {}

  ngOnInit(){
    this.httpService.obtenerInformacionUsuario(localStorage.getItem("Id_Usuxd")).subscribe((data: any)=>{
      this.datos = data[0];
      
    })
  }

  cerrarVentanaEmergente() {
    this.dialogRef.close();
  }

}
