import { Component, OnInit } from '@angular/core';
import { Sepomex } from 'src/app/services/Interface/Interfaces';


interface estados{
  estado: string,
  codigoestado: string
};

interface Municipios{
  municipio: string;
  codigomunicipio:string,

}

@Component({
  selector: 'app-sepomex',
  templateUrl: './sepomex.component.html',
  styleUrls: ['./sepomex.component.scss']
})




export class SepomexComponent implements OnInit {
  panelOpenState = false;
  fileError = false;
  showProgressBar = false;
  progressValue = 0;
  Archivo: Sepomex[]=[];
  estados: estados[] = [];

  
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
        console.log(aux);
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
            c_oficina: datos[8],
            c_tipo_asenta: datos[9],
            c_mnpio: datos[10],
            id_asenta_cpcons: datos[11],
            d_zona: datos[12],
            c_cve_ciudad: datos[13],
            c_CP: datos[14]
        };
        this.Archivo.push(sepomex);    
        })

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


    
    
    console.log(estadosSinDuplicados);
       


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
  



  constructor() { }

  ngOnInit(): void {
    
  }

}
