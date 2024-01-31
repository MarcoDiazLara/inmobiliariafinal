import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';
import { AsigarReAsignar } from 'src/app/services/Interface/Interfaces';
import { Asig_Inmuebles } from 'src/app/services/Interface/Interfaces';
import { GlobalService } from 'src/app/services/global/global.service';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BroAsignarAsesorComponent } from '../ventanaemerge/bro-asignar-asesor/bro-asignar-asesor.component';



@Component({
  selector: 'app-brokers-asignar-reasignar',
  templateUrl: './brokers-asignar-reasignar.component.html',
  styleUrls: ['./brokers-asignar-reasignar.component.scss']
})

export class BrokersAsignarReasignarComponent implements OnInit {

  usuarios$: any;
  formGeneral!: FormGroup;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns = [
    'Nombre_Inmueble',
    'Calle',
    'Num_Ext',
    'Municipio',
    'Nombres',
    'btOpciones'
  ];

  dataSource = new MatTableDataSource<any>([]);

  columnas: string[] = ['Nombre_Inmueble', 'Calle', 'Num_Ext', 'Municipio', 'Nombres', 'botonOption'];

  // poner el nombre de una variable
  datosinfo: Asig_Inmuebles[] = [];
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



    // let Bandera = localStorage.getItem("Bandera")
    // if(Bandera =="1")

    this.obtenerConteo();

    this.usuarios$ = this.adminService.getUsuariosOb().subscribe((usuarios) => {
      if (usuarios !== null) {
        this.dataSource.data = usuarios;
      }
    });



    this.obtenerUsuarios();

    //this.dataSource = new MatTableDataSource(this.datosinfo);

  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  obtenerConteo() {
    let IdSocio = localStorage.getItem("Id_Socio");
    this.http.sp_web_ase_asig_noasig(IdSocio).subscribe((data: any) => {
      this.datos = data;

    });
  }

  obtenerUsuarios() {
    let Id_Socio = localStorage.getItem("Id_Socio");
    let Id_Usuario = localStorage.getItem("Id_Usuario");

    this.httpService.Asignaciones_asesor(Id_Socio, Id_Usuario).subscribe((data: any) => {
      this.adminService.usuarios$.next(data);
      console.log(data)
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



  // mandar a llamar ventana emergente

  openasesor(id_inmo: any, asesor: any) {

    const valorCelda = asesor;
    console.log(asesor);
    // Verifica si el valor de la celda está vacío o no

    if (valorCelda == null) {
      // Almacena el valor en el localStorage
      localStorage.setItem("mi_valor", "2");

    } else {
      localStorage.setItem("mi_valor", "1");

    }

    localStorage.setItem("Id_Inmueble", id_inmo);
    localStorage.setItem("Nombres", asesor);
    console.log(id_inmo);


    const dialogRef = this.dialog.open(BroAsignarAsesorComponent, {
      width: '60vh',
      height: 'auto',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.obtenerUsuarios();
      });


  }


  openDialog(): void {
    this.dialog.closeAll();
    //this.httpService.setGlobalVariable(false);
    const itemsToRemove = [
      "id_publicacion",
      "mi_valor",
      "Asesor",
    ];
    itemsToRemove.forEach(item => {
      localStorage.removeItem(item);
    })

  }

}

