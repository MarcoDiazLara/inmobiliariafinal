import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';
import { AsignacionBroker } from 'src/app/services/Interface/Interfaces';
import { AsigarReAsignar } from 'src/app/services/Interface/Interfaces';
import { GlobalService } from 'src/app/services/global/global.service';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompAsignaBrokerComponent } from 'src/app/company-admin/ventanaemergente/comp-asigna-broker/comp-asigna-broker.component';
import { inmueblesArviceSpace } from 'src/app/services/Interface/Interfaces';
import { VentanasEmergentesComponent } from '../ventanas-emergentes/ventanas-emergentes.component';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';
import { forkJoin } from 'rxjs';
import { Observable } from 'rxjs';


// import * as jsPDF from 'jspdf';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-mostrar-inmuebles',
  templateUrl: './mostrar-inmuebles.component.html',
  styleUrls: ['./mostrar-inmuebles.component.scss']
})
export class MostrarInmueblesComponent implements OnInit {
  usuarios$: any;
  formGeneral!: FormGroup;
  idInmueble: any | undefined;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns = [
    'Nombre_Inmueble',
    'dueno',
    'dueno_P',
    'dueno_M',
    'Id_Inmueble',
    'btOpciones',
    'bajar'
  ];

  inmuebles: any[] = [];
  dataSource = new MatTableDataSource<any>([]);

  columnas: string[] = ['Nombre_Inmueble', 'dueno', 'dueno_P', 'dueno_M', 'Id_Inmueble', 'btOpciones', 'bajar'];

  // poner el nombre de una variable
  datosinmuebles: inmueblesArviceSpace[] = [];
  datos: AsigarReAsignar[] = [];

  constructor(
    public dialog: MatDialog,
    private http: HttpService,
    private httpService: HttpService,
    private adminService: GlobalService,
    private formBuilder: FormBuilder,
    private router: Router
    // Http para jalar el servicio 
  ) { }

 

  ngOnInit(): void {
    this.usuarios$ = this.adminService.getUsuariosOb().subscribe((usuarios) => {
      if (usuarios !== null) {
        this.dataSource.data = usuarios;
      }
    });



    this.obtenerUsuarios();

    this.dataSource = new MatTableDataSource(this.datosinmuebles);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }


  obtenerUsuarios() {
    this.httpService.mostrarInmueblesArviceSpace().subscribe((data: any) => {


      if (data !== 201) {
        this.adminService.usuarios$.next(data);
      } else {
        data = [];
        this.adminService.usuarios$.next(data);
      }
    },
      (err) => {
        console.log('Error de conexión');
      }
    )

  }


  openModalActualizar(element: any) {
    alert("open modal" + element)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  asignarAsesor(Id_InmuebleId_Inmueble: any, Id_Usuario: any) {
    alert("Id_InmuebleId_Inmueble: " + Id_InmuebleId_Inmueble + "Id_Usuario: " + Id_Usuario)

  }

  // mandar a llamar ventana emergente

  openasesor() {


    // Verifica si el valor de la celda está vacío o no




    const dialogRef = this.dialog.open(VentanasEmergentesComponent, {
      width: '130vh',
      height: '370px',
      disableClose: true
    });
  }


  openDialog(): void {
    this.dialog.closeAll();
    //this.httpService.setGlobalVariable(false);

  }
//  descargarArchivo(Id_Inmueble: any): void {
//   this.httpService.generarPDFmodelado3D(Id_Inmueble).subscribe((data: any) => {
//     console.log(data);

//     if (Array.isArray(data)) {
//       // Crear un objeto jsPDF
//       const doc = new jsPDF();
//       doc.setFont("helvetica");
//       doc.setFontSize(12);
//       doc.text("Requisitos del modelado 3D ", doc.internal.pageSize.getWidth() / 2, 15, { align: "center" });

//       var yPosition = 10;
//       doc.setFontSize(10);
//       var lineSpacing = 3.4; // Puedes ajustar este valor según sea necesario

//       // Crear un array de observables para manejar todas las conversiones de html2canvas en paralelo
//       const observables = data.map((item, index) => {
//         return new Observable((observer) => {
//           const yPosition = index * 10 + 20;

//           // Agregar texto al PDF
//           doc.text(
//             "Número de piso: " + item.Numero_Piso + '\n' +
//             "Nombre del Cuarto: " + item.Nombre_cuarto + '\n' +
//             "Nombre del Elemento: " + item.Elemento + '\n' + + '\n' +
//             "Nombre de los Acabados: " + item.Acabados + '\n' +
//             "Color: " + item.Color + '\n' +
//             "Tipo de Material: " + item.Tipo_Material + '\n' +
//             "Medidas: " + item.Medidas + '\n',
//             10,
//             yPosition * lineSpacing
//           );
//           var x = 10;
//           var y = 10;
//           var width = 100;
//           var height = 100;
//           // Agregar la imagen al PDF
//           let imageUrl = item.Imagen;
//           doc.addImage(imageUrl, 'JPEG', x, y, width, height);

//         });
        
       
//       });

//       // Usar forkJoin para esperar a que todas las conversiones html2canvas se completen
//       doc.save('documento.pdf');
//     } 
    
//   });
// }
      
      
      
descargarArchivo(Id_Inmueble: any): void {
  this.httpService.generarPDFmodelado3D(Id_Inmueble).subscribe((data: any) => {
    console.log(data);

    if (Array.isArray(data)) {
      // Crear un objeto jsPDF
      const doc = new jsPDF();
      doc.setFont("helvetica");
       doc.setFontSize(12);
       doc.text("Requisitos del modelado 3D ", doc.internal.pageSize.getWidth() / 2, 15, { align: "center" });
   
       var yPosition = 10;
       doc.setFontSize(10);
       var lineSpacing = 3.4; // Puedes ajustar este valor según sea necesario
      
      // Agregar contenido al PDF usando datos
        data.forEach((item, index) => {
          const yPosition = index * 10 + 20;
          doc.text(
            "Número de piso: " + item.Numero_Piso + '\n' + 
            "Nombre del Cuarto: " + item.Nombre_cuarto + '\n' +
            "Nombre del Elemento: " + item.Elemento + '\n' + + '\n' +
            "Nombre de los Acabados: " + item.Acabados + '\n' + 
            "Color: " + item.Color + '\n' +
            "Tipo de Material: " + item.Tipo_Material + '\n' +
            "Medidas: " + item.Medidas + '\n' +
            "Imagen: " + item.Imagen,
            10,
            yPosition * lineSpacing
          );
          var x = 10;
          var y = 10;
           var width = 100;
          var height = 100;
          // Agregar la imagen al PDF
      let imageUrl = item.Imagen;
           doc.addImage(imageUrl, 'JPEG', x, y, width, height);
      
        //   doc.text("Numero de piso "+ item.Numero_Piso + ' - '+"Nombre del Cuarto" + item.Nombre_cuarto +' - ' +"Nombre del Elemento"+ item.Elemento + ' - '+ "Nombre de los Acabados "+ item.Acabados + ' - '+  
        // "Color" + item.Color + ' - '+ "Tipo_Material"+ item.Tipo_Material + ' \n'+ "Medidas" +item.Medidas + ' - ' +"Imagen"+item.Imagen,  10, yPosition);
        });

      // Guardar el PDF en el disco
      doc.save('archivo.pdf');

      // Alternativamente, abrir el PDF en una nueva pestaña del navegador
      // doc.output('dataurlnewwindow');

    } else {
      console.error('La respuesta del servidor no es un array.');
    }
  });
}
  // descargarArchivo(Id_Inmueble: any): void {
  //   this.httpService.generarPDFmodelado3D(Id_Inmueble).subscribe((data: any) => {
  //     console.log(data);
  
  //     if (Array.isArray(data)) {
  //       // Crear un objeto jsPDF
  //       const doc = new jsPDF();
  //       doc.setFont("helvetica");
  //        doc.setFontSize(12);
  //        doc.text("Requisitos del modelado 3D ", doc.internal.pageSize.getWidth() / 2, 15, { align: "center" });
     
  //        var yPosition = 10;
  //        doc.setFontSize(10);
  //        var lineSpacing = 3.4; // Puedes ajustar este valor según sea necesario
        
  //       // Agregar contenido al PDF usando datos
  //         data.forEach((item, index) => {
  //           const yPosition = index * 10 + 20;
  //           doc.text(
  //             "Número de piso: " + item.Numero_Piso + '\n' + 
  //             "Nombre del Cuarto: " + item.Nombre_cuarto + '\n' +
  //             "Nombre del Elemento: " + item.Elemento + '\n' + + '\n' +
  //             "Nombre de los Acabados: " + item.Acabados + '\n' + 
  //             "Color: " + item.Color + '\n' +
  //             "Tipo de Material: " + item.Tipo_Material + '\n' +
  //             "Medidas: " + item.Medidas + '\n' +
  //             "Imagen: " + item.Imagen,
  //             10,
  //             yPosition * lineSpacing
  //           );
           
  //            // Agregar la imagen al PDF
  //            if (item.Imagen) {
  //             const imageElement = document.getElementById('imageElementId' + index);
    
  //             // Verificar si el elemento existe antes de llamar a html2canvas
  //             if (imageElement) {
  //               html2canvas(imageElement).then((canvas) => {
  //                 const imgData = canvas.toDataURL('image/jpeg'); // Obtener los datos de la imagen en formato base64
  //                 doc.addImage(imgData, 'JPEG', 10, (yPosition + 10) * lineSpacing, 80, 80); // Ajusta las coordenadas y dimensiones según sea necesario
  //                 if (index === data.length - 1) {
  //                   // Guardar el PDF en el disco después de agregar todas las imágenes
  //                   doc.save('archivo.pdf');
  //                 }
  //               });
  //             }
  //           }
  //         });
  //       } 
            
        
          //   doc.text("Numero de piso "+ item.Numero_Piso + ' - '+"Nombre del Cuarto" + item.Nombre_cuarto +' - ' +"Nombre del Elemento"+ item.Elemento + ' - '+ "Nombre de los Acabados "+ item.Acabados + ' - '+  
          // "Color" + item.Color + ' - '+ "Tipo_Material"+ item.Tipo_Material + ' \n'+ "Medidas" +item.Medidas + ' - ' +"Imagen"+item.Imagen,  10, yPosition);
      
  
        // Guardar el PDF en el disco
        // doc.save('archivo.pdf');
  
        // Alternativamente, abrir el PDF en una nueva pestaña del navegador
        // doc.output('dataurlnewwindow');
  
  //     else {
  //       console.error('La respuesta del servidor no es un array.');
  //     }
  //   });
      
  // }
  
  // descargarArchivo(Id_Inmueble:any): void {

  //   this.httpService.generarPDFmodelado3D(Id_Inmueble).subscribe((data: any)=>{
      
  //     console.log(data);
 
  //     if (Array.isArray(data)) {
  //        // Crear un objeto jsPDF
  //        const doc = new jsPDF();
  //         // Agregar contenido al PDF usando datos
  //         data.forEach((item, index) => {
  //           const yPosition = index * 10 + 20;
  //           doc.text(item.nombre + ' - ' + item.valor, 10, yPosition);
  //         });
      
  //     // Guardar el PDF en el disco o abrirlo en una nueva pestaña del navegador
    
  //       }else{
  //         console.error('La respuesta del servidor no es un array.');
  //       }
  //   });
  // }
  
  
    // const doc = new jsPDF();
    // doc.text('¡Hola, este es un PDF generado desde Angular!', 10, 10);
    // // Guardar el PDF en el disco o abrirlo en una nueva pestaña del navegador
    // doc.save('mi_pdf.pdf');


    // const enlace = document.createElement('a') as HTMLAnchorElement;
    // enlace.href = 'https://inmobiliaria.arvispace.com/imagenes/1413';
    // enlace.download = 'pruebaDescarga';

    // document.body.appendChild(enlace);
    // enlace.click();

    // document.body.removeChild(enlace);
  

  recuperarIdInmueble(id: number) {
    let idInmue = this.idInmueble = id;
    let parceo: string = idInmue.toString();
    localStorage.setItem("idInmuebleArviceSpace", parceo);
  }

    }
