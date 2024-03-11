import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Interesados } from 'src/app/services/Interface/Interfaces';



@Component({
  selector: 'app-interesados',
  templateUrl: './interesados.component.html',
  styleUrls: ['./interesados.component.scss']
})
export class InteresadosComponent implements OnInit {

  constructor(private router: Router,private http:HttpService,private formBuilder: FormBuilder,private adminService: GlobalService) { }

  usuarios$: any;
  inventarioasesor$: any;

  formGeneral!:FormGroup; 

  // @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  displayedColumns = [
    'Nombre',
    'Nombre_Inmueble',
      'Contacto_Principal',
      'Contacto_Emergencia',
      'Email',
    'botonOption'
    

  ];

  dataSource = new MatTableDataSource<any>([]);

  columnas: string[] = [  'Nombre', 'Nombre_Inmueble','Contacto_Principal','Contacto_Emergencia','Email'];
  


  // poner el nombre de una variable
  datosinventario: Interesados[]=[];
  

  

  
  ngOnInit(): void {
    
    
    this.inventarioasesor$ =this.adminService.getInventarioAsesorOb().subscribe((inventarioasesor)=>{
      if(inventarioasesor !== null){
        this.dataSource.data =inventarioasesor;
      }
    });

    let Id_Usuario = localStorage.getItem ('Id_Usuario');   
    // this.http.InventarioAsesor(Id_Usuario).subscribe((data:any)=>{
    //   data=this.datosinventario;
    //   console.log("datosinventario"+this.datosinventario);

    // });
    this.MostrarIntersados();
    
     this.dataSource = new MatTableDataSource(this.datosinventario);
    
      
  // this.obtenerInventario();

  }
  
  
  ngAfterViewInit() {
   
    this.dataSource.paginator = this.paginator;
    
  }

 MostrarIntersados(){
 this.http.interesados(localStorage.getItem("Id_Usuario")).subscribe((data:any)=>{
   
   
    this.adminService.inventarioasesor$.next(data);
  
 })
 }
  
 obtenerUsuarios() {
  let Id_Socio = localStorage.getItem("Id_Socio");

  this.http.InmueblesBrokers(Id_Socio).subscribe((data: any) => {

    
  },
    (err) => {
      
    }
  )

}
  
  // obtenerInventario(){
  //    let IdSocio = localStorage.getItem("Id_Socio");
  //    let IdUsuario = localStorage.getItem("Id_Usuario");


 
//  this.httpService.InventarioBroker(IdSocio,IdUsuario).subscribe((data:any)=>{
//   console.log("datosdeinventario"+data.Id_Usuario);
//       if(data !== 201) {
//         this.adminService.inventarioasesor$.next(data);
//         console.log(IdSocio,IdUsuario);
//         ;
//       } else {
//         data = [];
//         this.adminService.inventarioasesor$.next(data);
        
//       }      
//     },
//     (err) => {
//       console.log('Error de conexión',IdSocio,IdUsuario);

//     }
//     )
//   }


openModalActualizar(element:any){
  alert("open modal"+element)
}

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
  


  // mandar a llamar ventana emergente

  // openasesor(idPubli:any ) {

  //   localStorage.setItem ('idpublicacion',idPubli);
    


    // const dialogRef = this.dialog.open(VentanadetallesInmuebleComponent, {
    //   width: '80%',
    //   height: 'auto',  
    //   disableClose: true
    // });
  }

  // openDialog(): void {
  //   this.dialog.closeAll();
  //   const itemsToRemove =[
  //     "id_publicacion",
  //     "mi_valor",
  //     "Asesor",
  //   ];
  //   itemsToRemove.forEach( item => {
  //     localStorage.removeItem(item);
  //   })

  // }

  // desplazar() {
  //   this.router.navigate(['Dueno/datos-interesados'])
  // }


