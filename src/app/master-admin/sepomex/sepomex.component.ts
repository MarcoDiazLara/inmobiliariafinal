import { Component, OnInit } from '@angular/core';
import { Asentamiento, Sepomex } from 'src/app/services/Interface/Interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { CsvService } from 'src/app/services/csv.service';
import { HttpClient } from '@angular/common/http';




interface estados{
  estado: string,
  codigoestado: string
};
//codigo estado 
interface municipios{
  municipio: string;
  codigomunicipio:string,
  nestado: string;
}

interface tipoasentamiento{
  tipoasentamiento: string,
  codigoasentamiento: string
}


interface asentamiento{
  asentamiento: string,
  zona: string,
  tipoasentamiento:string,
  CP: string
}

interface codigosPostales{
  CP: string,
  codigoestado: string,
  codigomunicipio: string
}

@Component({
  selector: 'app-sepomex',
  templateUrl: './sepomex.component.html',
  styleUrls: ['./sepomex.component.scss']
})



export class SepomexComponent implements OnInit {
  

  
  selectedFiles: File[] = [];
  mostrarMensaje: boolean = false;
  progreso: number = 0;
  procesoEnCurso: boolean = false;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private formBuilder: FormBuilder,
    private csvService: CsvService,
    private https: HttpClient){}

  ngOnInit(): void {
    
  }

  panelOpenState = false;
  fileError = false;
  showProgressBar = false;
  progressValue = 0;
  Archivo: Sepomex[]=[];
  estados: estados[] = [];
  municipios: municipios[] = [];
  tipoasentamientos: tipoasentamiento[] = [];
  asentamientos: asentamiento[] = [];
  codigos: codigosPostales[]=[];
  //variables para la funcion proceso(){}
  estadosUnicos: estados[]=[];
  municipiosUnicos: municipios[]=[];
  tipoasentamientosUnicos: tipoasentamiento[] = [];
  asentamientosUnicos: asentamiento[] = [];
  codigosUnicos: codigosPostales[]=[];
  asentamientos2:asentamiento[]=[];



  
  processFile(event: any): void {
    const fileInput = event.target;
    const file = fileInput.files[0];
  
    if (file && file.name.endsWith('.txt')) {
      this.fileError = false;
      this.showProgressBar = true;
  
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        let fileContent = e.target.result;
        
        // Reemplazar caracteres especiales
        fileContent = this.reemplazarCaracteresEspeciales(fileContent);
  
        // Continuar con el procesamiento del archivo
        const modifiedContent = this.eliminarrenglones(fileContent);

        
        //-----------------------------------------------


        let aux = this.reemplazarCaracteresEspeciales(modifiedContent);
        
        let contenidoSinSaltos: string = modifiedContent.replace(/[\r]/g,'');
        let palabras: string[] = contenidoSinSaltos.split("\n");
        let palabrasFiltradas: string[] = palabras.filter(palabra => palabra.trim() !== '');
       

        palabrasFiltradas.forEach(linea=>{
          let datos: string[] = linea.split('|');
          let sepomex: Sepomex = {
            d_codigo: datos[0],
            d_asenta: datos[1],
            d_tipo_asenta: datos[2],
            D_mnpio: datos[3],
            d_estado: datos[4],
            d_ciudad: datos[5],
            d_CP: datos[6],
            c_estado: datos[7],
            c_oficina: datos[9],
            c_tipo_asenta: datos[10],
            c_mnpio: datos[11],
            id_asenta_cpcons: datos[12],
            d_zona: datos[13],
            c_cve_ciudad: datos[14],
            c_CP: datos[8]
        };
        this.Archivo.push(sepomex);    
        })
//Estados
        this.Archivo.forEach(sepomex => {
          let estado: estados = {
            estado: sepomex.d_estado,
              codigoestado: sepomex.c_estado
          };
      
          // Agregar el objeto Estado al array estados
          this.estados.push(estado);
      });
      let conjuntoEstados: Set<string> = new Set();

      let estadosSinDuplicados: estados[] = this.estados.filter(estado => {
        // Convertir cada objeto Estado a una cadena única
        let cadenaUnica = `${estado.estado}-${estado.codigoestado}`;
    
        // Verificar si la cadena ya está en el conjunto
        if (!conjuntoEstados.has(cadenaUnica)) {
            // Si no está en el conjunto, agregarlo y retornar true para incluirlo en el array resultado
            conjuntoEstados.add(cadenaUnica);
            return true;
        }
    
        // Si ya está en el conjunto, retornar false para excluirlo del array resultado
        return false;
    });

//Municipios


this.Archivo.forEach(sepomex => {
  let municipio: municipios = {
    municipio: sepomex.D_mnpio,
      codigomunicipio: sepomex.c_mnpio,
      nestado: sepomex.c_estado
  };

  // Agregar el objeto Estado al array estados
  this.municipios.push(municipio);
});

let conjuntoMunicipios: Set<string> = new Set();
let municipiosSinDuplicados: municipios[] = this.municipios.filter(municipios => {
  // Convertir cada objeto Estado a una cadena única
  //let cadenaUnica = `${municipios.municipio}-${municipios.codigomunicipio}-${municipios.nestado}`;
  let cadenaUnica = `${municipios.municipio}-${municipios.nestado}`;
  // Verificar si la cadena ya está en el conjunto
  if (!conjuntoMunicipios.has(cadenaUnica)) {
      // Si no está en el conjunto, agregarlo y retornar true para incluirlo en el array resultado
      conjuntoMunicipios.add(cadenaUnica);
      return true;
  }

  // Si ya está en el conjunto, retornar false para excluirlo del array resultado
  return false;
});
///-----------------------Asentamientos

this.Archivo.forEach(sepomex => {
  let tipoasentamiento: tipoasentamiento = {
    tipoasentamiento: sepomex.d_tipo_asenta,
      codigoasentamiento: sepomex.c_tipo_asenta
  };

  // Agregar el objeto Estado al array estados
  this.tipoasentamientos.push(tipoasentamiento);
});



let conjuntotipoAsentamiento: Set<string> = new Set();

let tipoAsentamientoSinDuplicados: tipoasentamiento[] = this.tipoasentamientos.filter(tipoa => {
  // Verificar si ambas propiedades tienen valores y si tipoa.codigoasentamiento no está vacío

    // Convertir cada objeto Estado a una cadena única
    let cadenaUnica = `${tipoa.tipoasentamiento}-${tipoa.codigoasentamiento}`;
    
    // Verificar si la cadena ya está en el conjunto
    if (!conjuntotipoAsentamiento.has(cadenaUnica)) {
      // Si no está en el conjunto, agregarlo y retornar true para incluirlo en el array resultado
      conjuntotipoAsentamiento.add(cadenaUnica);
      return true;
    
  }

  // Si alguna propiedad está vacía, retornar false para excluirlo del array resultado
  return false;
});


//-----------------------Asentamientos

this.Archivo.forEach(sepomex => {
  let asentamiento: asentamiento = {
    asentamiento: sepomex.d_asenta,
    tipoasentamiento: sepomex.c_tipo_asenta,
    zona: sepomex.d_zona,
    CP: sepomex.d_codigo
  };

  // Agregar el objeto Estado al array estados
  this.asentamientos.push(asentamiento);
});


//------------------codigosPostales
this.Archivo.forEach(sepomex => {
  let codigo: codigosPostales = {   
    CP: sepomex.d_codigo,
    codigoestado: sepomex.c_estado,
    codigomunicipio: sepomex.c_mnpio
  };

  // Agregar el objeto Estado al array estados
  this.codigos.push(codigo);
});


let conjuntoCP: Set<string> = new Set();

let CPSinDuplicados: codigosPostales[] = this.codigos.filter(codigo => {
  // Verificar si ambas propiedades tienen valores y si tipoa.codigoasentamiento no está vacío

    // Convertir cada objeto Estado a una cadena única
    let cadenaUnica = `${codigo.CP}-${codigo.codigoestado}-${codigo.codigomunicipio}`;
    
    // Verificar si la cadena ya está en el conjunto
    if (!conjuntotipoAsentamiento.has(cadenaUnica)) {
      // Si no está en el conjunto, agregarlo y retornar true para incluirlo en el array resultado
      conjuntotipoAsentamiento.add(cadenaUnica);
      return true;
    
  }

  // Si alguna propiedad está vacía, retornar false para excluirlo del array resultado
  return false;
});


    this.estadosUnicos = estadosSinDuplicados;
    this.csvService.generateCSV(estadosSinDuplicados, 'estados.csv');

    this.csvService.generateCSV(municipiosSinDuplicados, 'municipios.csv');
    this.municipiosUnicos = municipiosSinDuplicados;
 
    this.csvService.generateCSV(tipoAsentamientoSinDuplicados, 'tipoAsentamientos.csv');
    this.tipoasentamientosUnicos = tipoAsentamientoSinDuplicados;
  
    this.asentamientos2 = this.asentamientos.map((asentamiento: asentamiento) => {
      return {
        asentamiento: asentamiento.asentamiento.replace(/,/g, '-'),
        zona: asentamiento.zona.replace(/,/g, '-'),
        tipoasentamiento: asentamiento.tipoasentamiento.replace(/,/g, '-'),
        CP: asentamiento.CP.replace(/,/g, '-')
      };
    });

    this.csvService.generateCSV(this.asentamientos2, 'Asentamientos.csv');
    this.asentamientosUnicos = this.asentamientos;
    
    this.csvService.generateCSV(CPSinDuplicados, 'CodigosPostales.csv');
    this.codigosUnicos = CPSinDuplicados;
    



        //-----------------------------------------------


        this.updateProgressBar(100);
        setTimeout(() => {
          this.showProgressBar = false;
          this.progressValue = 0;
        }, 1000);
      };

      reader.readAsText(file,'ISO-8859-1');
    } else {
      this.fileError = true;
      this.showProgressBar = false;
      this.progressValue = 0;
      fileInput.value = '';
    }
  }



  


  eliminarrenglones(fileContent: string): string {
    const lines = fileContent.split('\n');
    lines.splice(0, 2); 
    return lines.join('\n');
  }

  updateProgressBar(value: number): void {
    this.progressValue = value;
  }

  handleDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  
  handleDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  
    const files = event.dataTransfer?.files;
  
    if (files && files.length > 0) {
      const customChangeEvent = { target: { files: files } } as any; 
      this.processFile(customChangeEvent);
    } else {
     
    }
  }
  

  reemplazarCaracteresEspeciales(fileContent: string): string {
    const caracteresEspeciales = {
      'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
      'ü': 'u', 'ñ': 'n', 'Á': 'A', 'É': 'E', 'Í': 'I',
      'Ó': 'O', 'Ú': 'U', 'Ü': 'U', 'Ñ': 'N'
    };
    Object.entries(caracteresEspeciales).forEach(([original, sustituto]) => {
      const regex = new RegExp(original, 'g');
      fileContent = fileContent.replace(regex, sustituto);
    });
  
    return fileContent;
  }

  


  proceso(){
    this.procesoEnCurso = true;
  
//Estados

    const totalEstados = this.estadosUnicos.length;
    let estadosProcesados = 0;



   this.estadosUnicos.forEach((estado) => {

    const p_idEstado = estado.codigoestado;
    const p_estado = estado.estado;

    // Realiza la solicitud al servicio en el servidor
    this.httpService.updateEstado(p_idEstado, p_estado).subscribe(
      (response: any) => {
        estadosProcesados++;
        if (response === '1') {
          
        } else {
          
        }
        this.progreso = (estadosProcesados / totalEstados) * 100;

          // Verificar si se completó el proceso
          if (estadosProcesados === totalEstados) {
            this.procesoEnCurso = false;
          }
      },
      (error: any) => {
        estadosProcesados++;
    
        this.progreso = (estadosProcesados / totalEstados) * 100;
        if (estadosProcesados === totalEstados) {
          this.procesoEnCurso = false;
        }
      }
    );
  });

//Municipios





  this.municipiosUnicos.forEach((municipio) => {
 
   const p_idMunicipio = municipio.municipio;
   const p_municipio = municipio.codigomunicipio;
   const p_idEstado = municipio.nestado;

   // Realiza la solicitud al servicio en el servidor
   this.httpService.updateMunicipio(p_idMunicipio, p_municipio, p_idEstado).subscribe(
     (response: any) => {
       if (response === '1') {
        
       } else {
         
       }
     },
     (error: any) => {
   
     }
   );
 });

//Tipo de Asentamiento
  this.tipoasentamientosUnicos.forEach((tAsentameinto) => {
 
   const p_idTasentamiento = tAsentameinto.tipoasentamiento;
   const  p_Tasentamiento = tAsentameinto.codigoasentamiento;

   // Realiza la solicitud al servicio en el servidor
   this.httpService.updateTasentamiento(p_idTasentamiento,  p_Tasentamiento).subscribe(
     (response: any) => {
       if (response === '1') {
       } else {
         
       }
     },
     (error: any) => {
       
     }
   );
 });

// Asentamientos

  this.asentamientosUnicos.forEach((Asentamiento) => {

   const  p_asentamiento = Asentamiento.asentamiento;
   const p_tipo_zona = Asentamiento.zona;
   const  p_idtipoasentamiento = Asentamiento.tipoasentamiento;
   const p_idcp = Asentamiento.CP;

   // Realiza la solicitud al servicio en el servidor
   this.httpService.updateAsentamiento(p_asentamiento, p_tipo_zona, p_idtipoasentamiento, p_idcp).subscribe(
     (response: any) => {
       if (response === '1') {
  
       } else {
         
       }
     },
     (error: any) => {
       
     }
   );
 });


// Codigos postales

  this.codigosUnicos.forEach((codigos) => {
 

   const p_id_cp = codigos.CP;
   const  p_cp = codigos.CP;
   const p_id_municipio = codigos.codigomunicipio;
   const  p_id_estado = codigos.codigoestado;

   // Realiza la solicitud al servicio en el servidor
   this.httpService.updateCodigopostal(p_id_cp, p_cp, p_id_municipio, p_id_estado ).subscribe(
     (response: any) => {
       if (response === '1') {
        
       } else {
         
       }
     },
     (error: any) => {
       
     }
   );
 });


  }

  serverUrlEstados: string = 'https://inmobiliaria.arvispace.com/servicios/cargaEstados.php';
  serverUrlMunicipios: string = 'https://inmobiliaria.arvispace.com/servicios/cargaMunicipios.php';
  serverUrlTipoAse:string = 'https://inmobiliaria.arvispace.com/servicios/CargaTipoAsentamiento.php';
  serverUrlCP:string = 'https://inmobiliaria.arvispace.com/servicios/CargaCP.php';
  serverUrlAsentamientos:string = 'https://inmobiliaria.arvispace.com/servicios/cargaAsentamientos.php';
  serverUrl!: string;

  handleFileInput(event: any,estado: any) {
    this.selectedFiles = event.target.files;
    
    this.uploadFile(estado);
  
  }

  async uploadFile(estado: any) {
    this.httpService.openasesor();
  
    if (this.selectedFiles.length > 0) {
      const formData = new FormData();
  
      formData.append('dataCliente', this.selectedFiles[0]);
      if(estado == 1){
        this.serverUrl = this.serverUrlEstados;
      }else if(estado == 2){
        this.serverUrl = this.serverUrlMunicipios;
      }else if(estado == 3){
        this.serverUrl = this.serverUrlTipoAse;
      }else if(estado == 4){
        this.serverUrl = this.serverUrlCP;
      }else if(estado == 5){
        this.serverUrl = this.serverUrlAsentamientos;
      }
      this.https.post(this.serverUrl, formData).subscribe(
        async (response) => {
          
          this.httpService.closeDialog();
          
          Swal.fire({
            title: "Exito",
            text: "Archivo CSV Cargado Exitosamente",
            icon: "success"
  
          });
         
          // Manejar la respuesta del servidor si es necesario
        },
        async (error) => {
       
          this.httpService.closeDialog();
          Swal.fire({
            icon: "error",
            text: "Ocurrio un error al querer cargar archivo CSV",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
          // Manejar el error de la solicitud POST si es necesario
        }
      );
    } else {
      this.httpService.closeDialog();
      Swal.fire(
        'Aviso!',
        'No se ha seleccionado un archivo CSV.',
        'info'
      )
      // Manejar el caso donde no se ha seleccionado ningún archivo
    }
  }

}