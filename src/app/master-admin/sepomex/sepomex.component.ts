import { Component, OnInit } from '@angular/core';
import { Asentamiento, Sepomex } from 'src/app/services/Interface/Interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';




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
  
  mostrarMensaje: boolean = false;
  progreso: number = 0;
  procesoEnCurso: boolean = false;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private formBuilder: FormBuilder){}

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

        //console.log(modifiedContent);
        //-----------------------------------------------


        let aux = this.reemplazarCaracteresEspeciales(modifiedContent);
        // console.log(aux);
        let contenidoSinSaltos: string = modifiedContent.replace(/[\r]/g,'');
        let palabras: string[] = contenidoSinSaltos.split("\n");
        let palabrasFiltradas: string[] = palabras.filter(palabra => palabra.trim() !== '');
        //console.log(palabrasFiltradas);

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
//console.log(this.municipios);
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
    CP: sepomex.d_CP
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


    // console.log("estados: ");
    //console.log(estadosSinDuplicados);
    this.estadosUnicos = estadosSinDuplicados;
    // console.log("municipios: ");
    // console.log(municipiosSinDuplicados);
    this.municipiosUnicos = municipiosSinDuplicados;
    // console.log("Tipo de Asentamientos: ")
    // console.log(tipoAsentamientoSinDuplicados);
    this.tipoasentamientosUnicos = tipoAsentamientoSinDuplicados;
    // console.log("Asentamientos: ");
    // console.log(this.asentamientos);
    this.asentamientosUnicos = this.asentamientos;
    // console.log("Codigos Postales: ");
    // console.log(CPSinDuplicados);
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
      console.log("Algo salió mal");
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
          console.log('Inserción exitosa:', response.message);
        } else {
          console.error('Error en la inserción de Estados', response.message);
        }
        this.progreso = (estadosProcesados / totalEstados) * 100;

          // Verificar si se completó el proceso
          if (estadosProcesados === totalEstados) {
            this.procesoEnCurso = false;
          }
      },
      (error: any) => {
        estadosProcesados++;
        console.error('Error de comunicación con el servidor:', error);
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
         console.log('Inserción exitosa:', response.message);
       } else {
         console.error('Error en la inserción de municipios', response.message);
       }
     },
     (error: any) => {
       console.error('Error de comunicación con el servidor:', error);
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
         console.log('Inserción exitosa:', response.message);
       } else {
         console.error('Error en la inserción de tipos de asentamiento', response.message);
       }
     },
     (error: any) => {
       console.error('Error de comunicación con el servidor:', error);
     }
   );
 });

// Asentamientos
console.log("incercion de Asentamientos");
  console.log(this.asentamientosUnicos);
  this.asentamientosUnicos.forEach((Asentamiento) => {

   const  p_asentamiento = Asentamiento.asentamiento;
   const p_tipo_zona = Asentamiento.zona;
   const  p_idtipoasentamiento = Asentamiento.tipoasentamiento;
   const p_idcp = Asentamiento.CP;

   // Realiza la solicitud al servicio en el servidor
   this.httpService.updateAsentamiento(p_asentamiento, p_tipo_zona, p_idtipoasentamiento, p_idcp).subscribe(
     (response: any) => {
       if (response === '1') {
         console.log('Inserción exitosa:', response.message);
       } else {
         console.error('Error en la inserción de Asentamientos', response.message);
       }
     },
     (error: any) => {
       console.error('Error de comunicación con el servidor:', error);
     }
   );
 });


// Codigos postales

console.log("incercion de codigos postales");
  console.log(this.codigosUnicos);
  this.codigosUnicos.forEach((codigos) => {
 

   const p_id_cp = codigos.CP;
   const  p_cp = codigos.CP;
   const p_id_municipio = codigos.codigomunicipio;
   const  p_id_estado = codigos.codigoestado;

   // Realiza la solicitud al servicio en el servidor
   this.httpService.updateCodigopostal(p_id_cp, p_cp, p_id_municipio, p_id_estado ).subscribe(
     (response: any) => {
       if (response === '1') {
         console.log('Inserción exitosa:', response.message);
       } else {
         console.error('Error en la inserción de codigospostales', response.message);
       }
     },
     (error: any) => {
       console.error('Error de comunicación con el servidor:', error);
     }
   );
 });


  }
}