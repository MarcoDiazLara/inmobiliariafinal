import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';
import { inventarioAsesores } from 'src/app/services/Interface/Interfaces';
// import {AsigarReAsignar} from 'src/app/services/Interface/Interfaces';
import { GlobalService } from 'src/app/services/global/global.service';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InmuebledetallesComponent } from '../ventanaemergente/inmuebledetalles/inmuebledetalles.component';



@Component({
  selector: 'app-inventarioagentes',
  templateUrl: './inventarioagentes.component.html',
  styleUrls: ['./inventarioagentes.component.scss']
})

export class InventarioagentesComponent implements OnInit {

  inventarioasesor$: any;

  formGeneral!:FormGroup; 

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  displayedColumns = [
    'Nombre_Publicacion',
    'Calle',
    'Num_Ext',
    'Num_Int',
    'Municipio',
    'botonOption'
    

  ];

  dataSource = new MatTableDataSource<any>([]);

  columnas: string[] = ['Nombre_Publicacion','Calle','Num_Ext','Num_Int','Municipio','botonOption'];
  


  // poner el nombre de una variable
  datosinventario: inventarioAsesores[]=[];

  

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

    this.inventarioasesor$ =this.adminService.getInventarioAsesorOb().subscribe((inventarioasesor)=>{
      if(inventarioasesor !== null){
        this.dataSource.data =inventarioasesor;
      }
    });

    // let Id_Usuario = localStorage.getItem ('Id_Usuario');   
    // this.http.InventarioAsesor(Id_Usuario).subscribe((data:any)=>{
    //   data=this.datosinventario;
    //   console.log("datosinventario"+this.datosinventario);

    // });
    // this.dataSource = new MatTableDataSource(this.datosinventario);
    
      
  this.obtenerInventario();

  }
  
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  obtenerInventario(){
     let idUsuario = localStorage.getItem("Id_Usuario");
//  let idUsuario = 19;
 
 this.httpService.InventarioAsesor(idUsuario).subscribe((data:any)=>{
  console.log("datosdeinventario"+data);
      if(data !== 201) {
        this.adminService.inventarioasesor$.next(data);
        console.log(idUsuario);
        ;
      } else {
        data = [];
        this.adminService.inventarioasesor$.next(data);
        
      }      
    },
    (err) => {
      console.log('Error de conexión',idUsuario);

    }
    )
  }




  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
  


  // mandar a llamar ventana emergente

  openasesor(idPubli:any ) {

    localStorage.setItem ('idpublicacion',idPubli);
    


    const dialogRef = this.dialog.open(InmuebledetallesComponent, {
      width: '80%',
      height: 'auto',  
      disableClose: true
    });
  }

  openDialog(): void {
    this.dialog.closeAll();
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

