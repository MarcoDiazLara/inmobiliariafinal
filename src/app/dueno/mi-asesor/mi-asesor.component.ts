import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { infoAsesor } from 'src/app/services/Interface/Interfaces';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-mi-asesor',
  templateUrl: './mi-asesor.component.html',
  styleUrls: ['./mi-asesor.component.scss']
})
export class MiAsesorComponent implements OnInit {

  datosAsesor!: infoAsesor;
  formGeneral!: FormGroup;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGeneral = this.formBuilder.group({
      nombre:["",[Validators.required]],
      apellidopaterno: ["",[Validators.required]],
      apellidomaterno: ["",[Validators.required]],
      email: ["",[Validators.required]],
      contactoprincipal: ["",[Validators.required]],
      Socio: ["",[Validators.required]]
    })
    this.httpService.obtenerinfoAsesor(localStorage.getItem("Id_Usuario")).subscribe((data:any)=>{
      console.log(data);
      if(data != "0"){
        this.datosAsesor = data[0];
      }else{
          
          this.httpService.infoAsesordueno(localStorage.getItem("Id_Socio")).subscribe((data1: any)=>{
            this.datosAsesor = data1[0];
          })
      }
        
      
    })
  }

}
