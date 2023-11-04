import { Component, OnInit,ViewChild  } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';
import { reasignacionA } from 'src/app/services/Interface/Interfaces';
import { GlobalService } from 'src/app/services/global/global.service';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompAsignarAsesorComponent } from '../ventanaemergente/comp-asignar-asesor/comp-asignar-asesor.component';


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
    'Asesor',
    'btOpciones'
  ];

  dataSource = new MatTableDataSource<any>([]);

  columnas: string[] = ['Nombre_Inmueble', 'Calle','Nombre_Usuario','Asesor','botonOption'];
  



  // poner el nombre de una variable
  datosinmuebles: reasignacionA[]=[];
 
 
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
    this.usuarios$ =this.adminService.getUsuariosOb().subscribe((usuarios)=>{
      if(usuarios !== null){
        this.dataSource.data =usuarios;
      }
    });
       

    // this.formGeneral = this.formBuilder.group({
    //   prueba: ['', [Validators.required]]
    // });
    
    //   let prueba = this.formGeneral.value.prueba;
     
    

    this.obtenerUsuarios();

    this.http.mostrarReasignacion().subscribe((data:any)=>{
    this.datosinmuebles=data;
    console.log(this.datosinmuebles);
    });
    this.dataSource = new MatTableDataSource(this.datosinmuebles);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  obtenerUsuarios(){

    this.httpService.mostrarReasignacion().subscribe((data:any)=>{
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
    localStorage.setItem("id_publicacion",id_inmo);
    localStorage.setItem("Asesor",asesor);
    
   

    const dialogRef = this.dialog.open(CompAsignarAsesorComponent, {
      width: '60vh',
      height: 'auto',
      disableClose: true
    });
  }

  openDialog(): void {

  }

}