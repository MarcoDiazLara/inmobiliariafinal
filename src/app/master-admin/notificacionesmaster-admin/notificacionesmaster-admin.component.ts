import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-notificacionesmaster-admin',
  templateUrl: './notificacionesmaster-admin.component.html',
  styleUrls: ['./notificacionesmaster-admin.component.scss']
})
export class NotificacionesmasterAdminComponent implements OnInit {
  showNotificationList = false; // Variable para controlar la visibilidad de la lista de notificaciones
  notifications: any[] = [ // Tu arreglo de notificaciones
      { title: 'Notificación 1', summary: 'Resumen de la notificación 1', timestamp: new Date() },
      { title: 'Notificación 2', summary: 'Resumen de la notificación 2', timestamp: new Date() }
      // Agrega más notificaciones según sea necesario
  ];


  usuarios$: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  displayedColumns = [
    'Nombre_Inmueble',
    'Calle',
    'Nombre_Usuario',
    'btOpciones'
  ];

  dataSource = new MatTableDataSource<any>([]);



  constructor(
    private httpService: HttpService,
    private adminService: GlobalService
  ) { }

  ngOnInit(): void {
    this.toggleNotificationList();

   this.usuarios$ =this.adminService.getUsuariosOb().subscribe((usuarios)=>{
      if(usuarios !== null){
        this.dataSource.data =usuarios;
      }
    })

    this.obtenerUsuarios();

  }

    toggleNotificationList() {
       this.showNotificationList = !this.showNotificationList;
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
  
}
