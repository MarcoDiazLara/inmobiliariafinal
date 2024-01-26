import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Inmuebles,Estados,Municipios,Asentamiento,duenosCM } from 'src/app/services/Interface/Interfaces';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-infoinmueble',
  templateUrl: './infoinmueble.component.html',
  styleUrls: ['./infoinmueble.component.scss']
})
export class InfoinmuebleComponent implements OnInit {
  generatedCode: string = '';
  estados: Estados[] = [];
  estado!: Estados;
  municipios: Municipios[] = [];
  municipio!: Municipios;
  asentamientos: Asentamiento[] = [];
  asentamiento!: Asentamiento;
  idasentamiento!:any;
  IdTipoInmueble!:any;
  IdDueno!:any;
  inmuebles: Inmuebles[] = [];
  inmueble!: Inmuebles;
  duenos: duenosCM[] = [];
  dueno!: duenosCM;
  

  constructor(private formBuilder: FormBuilder, private httpService: HttpService, private dialog: MatDialog ) { }
  firstFormGroup!: FormGroup;
  

  ngOnInit(): void {
    this.ObtnerEstado();
    this.firstFormGroup = this.formBuilder.group({

      pId_estado: ['', [Validators.required]],
      pId_municipio: ['', [Validators.required]],
      pId_asentamiento: ['', [Validators.required]],
      pId_Tipo_Inmueble: ['', [Validators.required]],
      p_Usuarios: ['', [Validators.required]],

    })

    this.obtenerDatosInmuebles(); 
    this.obtenerDuenos();
   
  }
    ObtnerEstado(){
    
      this.httpService.obtenerEstado().subscribe((resp:any)=>{
         if(resp!== 201){
          this.estado=resp[0].id_Estado;
          this.estados=resp;
         }
        },(err)=>{
          console.log(err);
        
      })
    }
    obternerM(){
      this.httpService.obtenerMunicipio(this.firstFormGroup.value.pId_estado).subscribe((resp: any)=>{
        if (resp !== 201) {
          this.municipio = resp[0].id_Municipio;
          this.municipios = resp;
        }
      },(err)=>{
        console.log(err);
      })
    }

    obtenerA(){
      this.httpService.obtenerAsentamiento(this.firstFormGroup.value.pId_estado,
        this.firstFormGroup.value.pId_municipio).subscribe((resp: any) => {
          if (resp !== 201) {
            this.asentamiento = resp[0].id_Asentamiento;
            this.asentamientos = resp;
          }
        }, (err) => {
          console.log(err);
        })
    }
     
    obtenerId(){
      this.idasentamiento=this.firstFormGroup.value.pId_asentamiento;
    }
  
  generateRandomCode() {
    // Generar un código aleatorio (puedes personalizar la lógica según tus necesidades)
    this.generatedCode = this.getRandomCode();
  }

  // Tipo Inmueble 
  obtenerDatosInmuebles() {
    this.httpService.tipoInmueble().subscribe((resp: any) => {
      if (resp !== 201) {
        this.inmueble = resp[0].Id_Tipo_Inmueble;
        this.inmuebles = resp;
      
      }
    }, (err) => {
      console.log(err);
    })
  }

  IdT_Inmueble(){
    this.IdTipoInmueble=this.firstFormGroup.value.pId_Tipo_Inmueble;
  }
  // 
  // Id Usuario
  obtenerDuenos() {

    this.httpService.SeleccionaDuenosCM(localStorage.getItem("Id_Socio")).subscribe((resp: any) => {
      if (resp !== 201) {

       
        this.dueno = resp[0].Id_Usuario;
        this.duenos = resp;
      }
    }, (err) => {
      console.log(err);
    })
  }
  IdDuenos(){
    this.IdDueno=this.firstFormGroup.value.p_Usuarios;
  }
  // 

  private getRandomCode(): string {
    // Lógica para generar códigos aleatorios, por ejemplo, usando números y letras
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const codeLength = 5;
    let randomCode = '';

    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomCode += characters.charAt(randomIndex);
    }

    return randomCode;
  }
  CerraDialogo() {
    this.dialog.closeAll();

  }
}
