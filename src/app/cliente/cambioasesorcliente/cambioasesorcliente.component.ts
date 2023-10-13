import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';


@Component({
  selector: 'app-cambioasesorcliente',
  templateUrl: './cambioasesorcliente.component.html',
  styleUrls: ['./cambioasesorcliente.component.scss']
 

})
export class CambioasesorclienteComponent implements OnInit {

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  
  formGeneral!:FormGroup;
  loading = false;
  hide2 = true;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(
    private formBuilder: FormBuilder,
    // private dialog: MatDialog,
    private httpService: HttpService,
  ) { }
  


  ngOnInit(): void {
    this.formGeneral = this.formBuilder.group({
      nombreasesor: ['', [Validators.required]],
      apellidopaterno: ['', [Validators.required]],
      apellidomaterno: ['', [Validators.required]],
      email: ['', [Validators.required]],
      motivosolicitud: ['', [Validators.required]],
  });
}


Guardardatos() {


  if (this.formGeneral) {
    let motivocliente = this.formGeneral.value.motivocliente;
   

    

    alert( 'motivocliente'+ motivocliente);

  }
}

}
