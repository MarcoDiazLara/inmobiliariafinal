import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { asignacionA } from 'src/app/services/Interface/Interfaces';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, Validators } from '@angular/forms';
import { __param } from 'tslib';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asignasrasesor',
  templateUrl: './asignasrasesor.component.html',
  styleUrls: ['./asignasrasesor.component.scss']
})
export class AsignasrasesorComponent implements OnInit {


  asesores:asignacionA[]=[];

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  formGeneral!:FormGroup;
  loading = false;
  hide2 = true;


  
  constructor(
    private dialog: MatDialog,
    private http:HttpService,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.http.mostrarAsesor().subscribe((data:any)=>{
    this.asesores=data;
    console.log(this.asesores);
    });


    
    this.formGeneral = this.formBuilder.group({
      Nombres: ['', [Validators.required]],
    });

    
  }

  guardarasesor() {
    if (this.formGeneral){
      let Nombres = this.formGeneral.value.Nombres;
      let Id_Publicacion = localStorage.getItem("id_publicacion");
      console.log(Id_Publicacion);
    
    

      
      this.http.insertarasesor( Id_Publicacion,Nombres).subscribe((data: any)=> {
        if(data == 1){
          alert("Se ha insertado el asesor");
          this.closeDialog();
        }
        else{
          alert("Error al insertar");
        }
      });

   }
   


}

  closeDialog() {
    this.dialog.closeAll();
  }



}
