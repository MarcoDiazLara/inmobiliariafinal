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

@Component({
  selector: 'app-pantalla-usuarios',
  templateUrl: './pantalla-usuarios.component.html',
  styleUrls: ['./pantalla-usuarios.component.scss']
})

export class PantallaUsuariosComponent implements OnInit {
  
  pantallausuarios$: any;

  formGeneral!:FormGroup; 

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  displayedColumns = [
    'Nombre_Usuario',
    'Tipo_Usuario',
    // 'Num_Ext',
    // 'Municipio',
    // 'Estatus_Publicacion',
    // 'botonOption'
    

  ];

  dataSource = new MatTableDataSource<any>([]);

  columnas: string[] = ['Nombre_Usuario','Tipo_Usuario','botonOption'];
  


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

    this.pantallausuarios$ =this.adminService.getpantallausuariosOb().subscribe((inventarioasesor)=>{
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
     let IdSocio = localStorage.getItem("Id_Socio");

//  Llamas tu procedimiento 
 this.httpService.InventarioInmuebles(IdSocio).subscribe((data:any)=>{
  console.log("datosdeinventario"+data);
      if(data !== 201) {
        this.adminService.pantallausuarios$.next(data);
        console.log(IdSocio);
        ;
      } else {
        data = [];
        this.adminService.pantallausuarios$.next(data);
        
      }      
    },
    (err) => {
      console.log('Error de conexión',IdSocio);

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
    


    // const dialogRef = this.dialog.open(VentanadetallesInmuebleComponent, {
    //   width: '80%',
    //   height: 'auto',  
    //   disableClose: true
    // });
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






