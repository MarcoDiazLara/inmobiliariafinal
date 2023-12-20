import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-estatus',
  templateUrl: './estatus.component.html',
  styleUrls: ['./estatus.component.scss']
})
export class EstatusComponent implements OnInit {
  formulario!: FormGroup;
  constructor( private formBuilder: FormBuilder,private httpService: HttpService) { 
    this.formulario = this.formBuilder.group({
      estatus: [''] // Aquí se inicializa el control del mat-select
    });
  }

  ngOnInit(): void {
  }
  EstatusActualizar(){
    this.httpService.EstausCompany(localStorage.getItem("Id_Usuxd"),this.formulario.value.estatus).subscribe((data:any)=>{
      alert("Se cambio de estatus");
    })

    
  }

}
