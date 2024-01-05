import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormArray } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { HttpClient } from '@angular/common/http';
import { MetododepagoComponent } from 'src/app/metododepago/metododepago.component';




interface selects {
  value: string;
  viewValue: string;
}


interface ColorOption {
  name: string;
  value: string;
}
@Component({
  selector: 'app-requisitos3d',
  templateUrl: './requisitos3d.component.html',
  styleUrls: ['./requisitos3d.component.scss']
})
export class Requisitos3dComponent implements OnInit {
  form: FormGroup;
  // usuarios: FormArray;
  forms: FormGroup[] = [];
  formGeneral!: FormGroup;
  numberOfForms: number = 1; // Valor inicial
  dynamicForms: FormGroup[] = [];
  miFormulario!: FormGroup;
  pdf!: FormGroup;

  llave: any;
  selectedColor: string = '';
  colorOptions: ColorOption[] = [
    { name: 'Rojo', value: 'red' },
    { name: 'Verde', value: 'green' },
    { name: 'Azul', value: 'blue' },
    // Puedes agregar más opciones según tus necesidades
  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog, private httpService: HttpService,
    private httpClient: HttpClient) {
    this.form = this.fb.group({
      usuarios: this.fb.array([])
    });
    // this.generateForms();
    // this.initializeForms(0); // Specify the desired number of forms


  }



  get items(): FormArray {
    return this.miFormulario.get('items') as FormArray;
  }

  agregarItem() {
    this.items.push(this.fb.group({
      // Definir los campos del formulario aquí
      items: this.fb.array([]),
      name: ['', [Validators.required]],
      Nombre_de_habitacion: ['', [Validators.required]],
      Elementos_del_Inmueble: ['', [Validators.required]],
      Acabados: ['', [Validators.required]],
      Color: ['', [Validators.required]],
      tipo_material: ['', [Validators.required]],
      Largo: ['', [Validators.required]],
      Ancho: ['', [Validators.required]],
      Altura: ['', [Validators.required]],
      img: ['', [Validators.required]],


    }));
  }

  eliminarItem(index: number) {
    this.items.removeAt(index);
  }
  ngOnInit() {
    this.llave = localStorage.getItem("Id_Tipo_Plan");
    this.miFormulario = this.fb.group({
      items: this.fb.array([]),
      name: ['', [Validators.required]],
      Nombre_de_habitacion: ['', [Validators.required]],
      Elementos_del_Inmueble: ['', [Validators.required]],
      Acabados: ['', [Validators.required]],
      Color: ['', [Validators.required]],
      tipo_material: ['', [Validators.required]],
      Largo: ['', [Validators.required]],
      Ancho: ['', [Validators.required]],
      Altura: ['', [Validators.required]],
      img: ['', [Validators.required]],
    });

    this.pdf = this.fb.group({
      PDF:['',[Validators.required]]
    })
  }



  openDialog2(bandera: number): void {
    let auxi = bandera.toString();
    localStorage.setItem("tipodeplan", auxi);
    const dialogRef = this.dialog.open(MetododepagoComponent, {
    });}

  get usuarios() {
    return this.form.get('usuarios') as FormArray;
  }

  agregarUsuario() {
    this.usuarios.push(this.fb.group({
      username: ['']
    }));
  }

  eliminarUsuario(index: number) {
    this.usuarios.removeAt(index);
  }





  CerraDialogo() {
    this.dialog.closeAll();

  }
  habitaciones: selects[] = [
    { value: 'Dormitorio', viewValue: 'Dormitorio' },
    { value: 'Baño', viewValue: 'Baño' },
    { value: 'Comedor', viewValue: 'Comedor' },
    { value: 'Sala', viewValue: 'Sala' },
    { value: 'Cocina', viewValue: 'Cocina' },
    { value: 'Sotano', viewValue: 'Sotano' },
    { value: 'Estudio', viewValue: 'Estudio' },
    { value: 'Jardin', viewValue: 'Jardin' },
    { value: 'Garaje', viewValue: 'Garaje' },
    { value: 'Local', viewValue: 'Local' },
    { value: 'Atico', viewValue: 'Atico' },
    { value: 'Lavanderia', viewValue: 'Lavanderia' },
    { value: 'Patio', viewValue: 'Patio' },
    { value: 'Biblioteca', viewValue: 'Biblioteca' },
    { value: 'Lavanderia', viewValue: 'Lavanderia' },
    { value: 'Roof garden', viewValue: 'Roof garden' },
    { value: 'Closet', viewValue: 'Closet' },
  ];

  elementos: selects[] = [
    { value: 'Ventana', viewValue: 'Ventana' },
    { value: 'Puerta', viewValue: 'Puerta' },
    { value: 'Interruptor', viewValue: 'Interruptor' },
    { value: 'Columnas centrales', viewValue: 'Columnas centrales' },
    { value: 'Tragaluz', viewValue: 'Tragaluz' },
    { value: 'Retrete', viewValue: 'Retrete' },
    { value: 'Lava manos', viewValue: 'Lava manos' },
    { value: 'Tina', viewValue: 'Tina' },
    { value: 'Jacuzzi', viewValue: 'Jacuzzi' },
    { value: 'Escaleras', viewValue: 'Escaleras' },
    { value: 'Lamparas', viewValue: 'Lamparas' },
    { value: 'Cancel', viewValue: 'Cancel' },
    { value: 'Porton', viewValue: 'Porton' },
    { value: 'Piso', viewValue: 'Piso' },
    { value: 'Techo', viewValue: 'Techo' },
    { value: 'Pared', viewValue: 'Pared' },
    { value: 'Regadera', viewValue: 'Regadera' },
    { value: 'Toma de Agua', viewValue: 'Toma de Agua' },
    { value: 'Chimenea', viewValue: 'Chimenea' },
    { value: 'Barrita', viewValue: 'Barrita' },
  ];


  material: selects[] = [
    { value: 'Desconocido', viewValue: 'Desconocido' },
    { value: 'Aluminio', viewValue: 'Aluminio' },
    { value: 'Acero Inoxidable', viewValue: 'Acero Inoxidable' },
    { value: 'Madera', viewValue: 'Madera' },
    { value: 'Lozeta', viewValue: 'Lozeta' },
    { value: 'Marmol', viewValue: 'Marmol' },
    { value: 'Repillado', viewValue: 'Repillado' },
    { value: 'Piso Pulido', viewValue: 'Piso Pulido' },
    { value: 'Ceramica', viewValue: 'Ceramica' },
    { value: 'Cristal', viewValue: 'Cristal' },
    { value: 'Yeso', viewValue: 'Yeso' },
    { value: 'Tablaroca', viewValue: 'Tablaroca' },
    { value: 'Lamina', viewValue: 'Lamina' },
    { value: 'Hormigon', viewValue: 'Hormigon' },
    { value: 'Fibra de vidrio', viewValue: 'Fribra de vidrio' },
    { value: 'Carton', viewValue: 'Carton' },
    { value: 'Adobe', viewValue: 'Adobe' },
    { value: 'Plastico', viewValue: 'Plastico' },
    { value: 'Grava', viewValue: 'Grava' },
    { value: 'Ladrillo', viewValue: 'Ladrillo' },
    { value: 'Hierro', viewValue: 'Hierro' },
  ];

  acabados: selects[] = [
    { value: 'Ninguno', viewValue: 'Ninguno' },
    { value: 'Desconocido', viewValue: 'Desconocido' },
    { value: 'Pintura', viewValue: 'Pintura' },
    { value: 'Papel tapiz', viewValue: 'Papel tapiz' },
    { value: 'Revestimiento', viewValue: 'Revestimiento' },
    { value: 'Rustico', viewValue: 'Rustico' },
  ]
  
  subirPDF(){
    const formData = new FormData();
    const pdf = this.pdf.value;
    formData.append('pdfs', pdf);
    this.httpClient.post('https://inmobiliaria.arvispace.com/servicios/sp_web_SubirPDF.php', formData)
    .subscribe((response) => {
      console.log(response);
    });
  }

  ObtnerInformacio() {
    let date = new Date();

    // this.subir_imagenes();
    const itemsArray = this.miFormulario.get('items') as FormArray;

    const imagenNames: any[] = [];

    for (let a = 0; a < itemsArray.length; a++) {
      const imagenName = itemsArray.controls[a]?.get('img')?.value.name;
      if (imagenName) {
        imagenNames.push(imagenName);
      }

    }
    
    let xd = this.items.length;
    let i = 0;
    for (i; i < xd; i++) {
      const firstItemName = itemsArray.controls[i]?.get('name')?.value;
      const firstItemElementos_del_Inmueble = itemsArray.controls[i]?.get('Elementos_del_Inmueble')?.value;
      const firstItemNombre_de_habitacion = itemsArray.controls[i]?.get('Nombre_de_habitacion')?.value;
      const firstItemtipo_material = itemsArray.controls[i]?.get('tipo_material')?.value;
      const firstItemAcabados = itemsArray.controls[i]?.get('Acabados')?.value;
      const firstItemcolor = itemsArray.controls[i]?.get('Color')?.value;
      // const firstItemLargo= itemsArray.controls[i]?.get('Largo')?.value;
      // const firstIteAncho =  itemsArray.controls[i]?.get('Ancho')?.value;
      // const firstItemAltura= itemsArray.controls[i]?.get('Altura')?.value;
      const firstItemLargo: string = String(itemsArray.controls[i]?.get('Largo')?.value);
      const firstIteAncho: string = String(itemsArray.controls[i]?.get('Ancho')?.value);
      const firstItemAltura: string = String(itemsArray.controls[i]?.get('Altura')?.value);
      const imagen: string = String(itemsArray.controls[i]?.get('img')?.value);

      let dia = date.getDate();
      let dia1 = date.getDate().toString();;
      if (dia < 10) {
        dia1 = "0" + dia1;
      }
      let mes = (date.getMonth() + 1);
      let mes1 = (date.getMonth() + 1).toString();
      if (mes < 10) {
        mes1 = "0" + mes1;
      }
      let anio = date.getFullYear().toString();
      let nom_aux = anio + mes1 + dia1;
      //console.log();
      //let aux = this.obtenerNombreArchivo(imagenNames[i]);
       let img = "https://inmobiliaria.arvispace.com/imagenes/" + nom_aux + imagenNames[i];
      
      const RGB = this.hexToRgb(firstItemcolor);
      const colorRGB = "[" + RGB?.r + "," + RGB?.g + "," + RGB?.b + "]";

      const concatenatedString: string = firstItemLargo + "cm " + " x " + firstIteAncho + "cm " + " x " + firstItemAltura + "cm";

      this.httpService.subirModelado(localStorage.getItem("p_Id_inmueble"),firstItemName,firstItemNombre_de_habitacion,firstItemElementos_del_Inmueble, firstItemAcabados,colorRGB,firstItemtipo_material, concatenatedString, img, localStorage.getItem("Id_Usuario")).subscribe((data:any)=>{

        


        })
        
      // console.log(firstItemName + firstItemElementos_del_Inmueble + firstItemtipo_material + firstItemAcabados + firstItemcolor + concatenatedString  );
    }
    alert("Se subio");
    this.subir_imagenes();
    this.CerraDialogo();

  }

  hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    // Verificar si la cadena es un valor hexadecimal válido
    const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    const result = hexRegex.exec(hex);

    if (!result) {
      return null; // Devolver null si la cadena no es válida
    }

    // Convertir los componentes hexadecimales a valores decimales
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);

    return { r, g, b };
  }



  subir_imagenes(): void {
    const formData = new FormData();
    const itemsArray = this.miFormulario.get('items') as FormArray;
  
    // Itera sobre los formularios dinámicos
    for (let i = 0; i < itemsArray.length; i++) {
      const formGroup = itemsArray.at(i) as FormGroup;
      const imageControl = formGroup.get('img') as FormControl;
  
      // Verifica que el control de imagen tenga un archivo
      if (imageControl.value instanceof File) {
        formData.append('images[]', imageControl.value, imageControl.value.name);
      }
    }
  
    // Realiza la solicitud HTTP
    this.httpClient.post('https://inmobiliaria.arvispace.com/servicios/subirArchivo.php', formData)
      .subscribe((response) => {
        console.log(response);
      });
  }
  
  onFileChange(event: any, index: number): void {
    const itemsArray = this.miFormulario.get('items') as FormArray;
    const formGroup = itemsArray.at(index) as FormGroup;
    const imageControl = formGroup.get('img') as FormControl;
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      imageControl.setValue(file);
    }
  }




}









