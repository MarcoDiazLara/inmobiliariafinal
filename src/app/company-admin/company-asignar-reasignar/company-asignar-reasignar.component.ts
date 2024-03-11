import { Component, OnInit,  ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatInputModule} from '@angular/material/input';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';
import { AsignacionBroker } from 'src/app/services/Interface/Interfaces';
import {AsigarReAsignar} from 'src/app/services/Interface/Interfaces';
import { GlobalService } from 'src/app/services/global/global.service';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompAsignaBrokerComponent } from '../ventanaemergente/comp-asigna-broker/comp-asigna-broker.component';



@Component({
  selector: 'app-company-asignar-reasignar',
  templateUrl: './company-asignar-reasignar.component.html',
  styleUrls: ['./company-asignar-reasignar.component.scss']
})
export class CompanyAsignarReasignarComponent implements OnInit {



  usuarios$: any;
  formGeneral!:FormGroup; 

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns = [
    'Nombre_Inmueble',
    'Calle',
    'Nombre_Usuario',
    'Broker',
    'btOpciones'
  ];

  dataSource = new MatTableDataSource<any>([]);

  columnas: string[] = ['Nombre_Inmueble', 'Calle','Nombre_Usuario','Broker','botonOption'];
  
  // poner el nombre de una variable
  datosinmuebles: AsignacionBroker[]=[];
  datos: AsigarReAsignar[]=[];


  
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
    // let Bandera = localStorage.getItem("Bandera")
    // if(Bandera =="1")
    {
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

  // ngAfterViewChecked(){
  //   this.obtenerUsuarios();
  // }

  
  ngAfterViewInit() {
    this.obtenerUsuarios();
    this.dataSource.paginator = this.paginator;
  }
 
  obtenerConteo(){
    let IdSocio = localStorage.getItem("Id_Socio");
    this.http.Aginados_NoAsigandos(IdSocio).subscribe((data:any)=>{
      this.datos=data;
    
    });
  }
    
  obtenerUsuarios(){
    let Id_Socio = localStorage.getItem("Id_Socio");

    this.httpService.InmueblesBrokers(Id_Socio).subscribe((data:any)=>{
    
      if(data !== 201) {
        this.adminService.usuarios$.next(data);
      } else {
        data = [];
        this.adminService.usuarios$.next(data);
      }      
    },
    (err) => {
  
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

if (valorCelda == null) {
// Almacena el valor en el localStorage
localStorage.setItem("mi_valor", "2");

} else {
localStorage.setItem("mi_valor", "1");

}

localStorage.setItem("Id_Inmueble",id_inmo);
    localStorage.setItem("Asesor", asesor );
    



    const dialogRef = this.dialog.open(CompAsignaBrokerComponent, {
      width: '60vh',
      height: 'auto',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.obtenerUsuarios();
      });
  }


  // openDialog(): void {
  //   this.dialog.closeAll();
  //   //this.httpService.setGlobalVariable(false);
  //   const itemsToRemove =[
  //     "id_publicacion",
  //     "mi_valor",
  //     "Asesor",
  //   ];
  //   itemsToRemove.forEach( item => {
  //     localStorage.removeItem(item);
  //   })

  // }

}













































 


