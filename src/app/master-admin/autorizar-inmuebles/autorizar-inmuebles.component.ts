import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InventarioInmuebles } from 'src/app/services/Interface/Interfaces';
import { AutorizarComponent } from '../ventanaemergente/autorizar/autorizar.component';


@Component({
  selector: 'app-autorizar-inmuebles',
  templateUrl: './autorizar-inmuebles.component.html',
  styleUrls: ['./autorizar-inmuebles.component.scss']
})
export class AutorizarInmueblesComponent implements OnInit {

  inventarioasesor$: any;

  formGeneral!:FormGroup; 

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  displayedColumns = [
    'Nombre_Inmueble',
    'Calle',
    'Num_Ext',
    'Municipio',
    'Estatus_Publicacion',
    'botonOption'
    

  ];

  dataSource = new MatTableDataSource<any>([]);

  columnas: string[] = ['Nombre_Inmueble','Calle','Num_Ext','Municipio','Estatus_Publicacion','botonOption'];
  


  // poner el nombre de una variable
  datosinventario: InventarioInmuebles[]=[];
  

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

    
      
  this.obtenerInventario();

  }
  
  


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  obtenerInventario(){
     

 
 this.httpService.inmueblesAuto().subscribe((data:any)=>{
  console.log("datosdeinventario"+data);
      if(data !== 201) {
        this.adminService.inventarioasesor$.next(data);
     
        
      } else {
        data = [];
        this.adminService.inventarioasesor$.next(data);
        
      }      
    },
    (err) => {
      console.log('Error de conexión');

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
    const dialogRef = this.dialog.open(AutorizarComponent, {
      width: '70%',
      height: '70%',  
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
    this.obtenerInventario();
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
