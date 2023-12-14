import { Component, OnInit,  ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';
import { reasignacionA } from 'src/app/services/Interface/Interfaces';
import {AsigarReAsignar} from 'src/app/services/Interface/Interfaces';
import { GlobalService } from 'src/app/services/global/global.service';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompAsignaBrokerComponent } from '../ventanaemergente/comp-asigna-broker/comp-asigna-broker.component';


@Component({
  selector: 'app-comp-asigna-grupo',
  templateUrl: './comp-asigna-grupo.component.html',
  styleUrls: ['./comp-asigna-grupo.component.scss']
})


export class CompAsignaGrupoComponent implements OnInit {

// ArrayAsignacion:any[]=[];

  usuarios$: any;
  //  Id_Usu: any;

  formGeneral!:FormGroup; 

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns = [
    'Nombre',
    'Apellido Paterno',
    'Apellido Materno',
    'btOpciones'
  ];

  dataSource = new MatTableDataSource<any>([]);

  columnas: string[] = ['Nombre', 'Apellido Paterno','Apellido Materno','botonOption'];
  

  // poner el nombre de una variable
  datosinmuebles: reasignacionA[]=[];

  datosAsesores: AsigarReAsignar[]=[];



 
 
  
  constructor(
    public dialog: MatDialog,
    private http:HttpService,
    private httpService: HttpService,
    private adminService: GlobalService,
    private formBuilder: FormBuilder,
    private router:Router
    // Http para jalar el servicio 
  ) { }

 

  ngOnInit(): void {
    



    let Bandera = localStorage.getItem("Bandera")

    if(Bandera =="1"){
     this.obtenerConteo();

     this.usuarios$ =this.adminService.getUsuariosOb().subscribe((usuarios)=>{
      if(usuarios !== null){
        this.dataSource.data =usuarios;
      }
    });

    }


     
    

    this.obtenerUsuarios();

    this.dataSource = new MatTableDataSource(this.datosinmuebles);

  }

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
 
  obtenerConteo(){
    let IdSocio = localStorage.getItem("Id_Socio");
    this.http.AsesoresAginados_NoAsigandos(IdSocio).subscribe((data:any)=>{
      this.datosAsesores=data;
    
    });
  }


  obtenerUsuarios(){
    let Id_Socio = localStorage.getItem("Id_Socio");
  

    
    this.httpService.mostrarReasignacion(Id_Socio).subscribe((data:any)=>{
      // this.ArrayAsignacion = data ;
      // this.ArrayAsignacion.forEach(element => {
      //   let IdUsuSocio = element.Id_Usuario;
      //  localStorage.setItem("IdUsj", IdUsuSocio);  
      // } );
      

      if(data !== 201) {
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
  

  openModalActualizar(element:any){
    alert("open modal"+element)
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

asignarAsesor(Id_InmuebleId_Inmueble:any,Id_Usuario:any){
  alert("Id_InmuebleId_Inmueble: "+Id_InmuebleId_Inmueble+"Id_Usuario: "+Id_Usuario)

}

// mandar a llamar ventana emergente

openasesor(id_inmo:any,asesor:any ) {

const valorCelda = asesor;

// Verifica si el valor de la celda está vacío o no
if (valorCelda !== null) {
// Almacena el valor en el localStorage
localStorage.setItem("mi_valor", "1");

} else {
localStorage.setItem("mi_valor", "2");

}

localStorage.setItem("id_publicacion",id_inmo);
    localStorage.setItem("Asesor", asesor );


    

    const dialogRef = this.dialog.open(CompAsignaBrokerComponent, {
      width: '60vh',
      height: 'auto',
      disableClose: true
    });
  }


  openDialog(): void {
    this.dialog.closeAll();
    //this.httpService.setGlobalVariable(false);
    const itemsToRemove =[
      "id_publicacion",
      "mi_valor",
      "Asesor",
    ];
    itemsToRemove.forEach( item => {
      localStorage.removeItem(item);
    })

  }

}













































 



