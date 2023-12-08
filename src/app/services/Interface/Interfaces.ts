export interface Inmuebles{
    Id_Tipo_Inmueble: string
    Tipo_Inmueble: string
  };

export interface Estados{
    id_Estado: string
    Estado: string
};

export interface Municipios{
    id_Municipio: string
    Municipio: string
};

export interface Asentamiento{
    id_asentamiento: string
    Asentamiento: string
};

export interface Asesores{
    Nombres: string,
    Apellido_Paterno: string,
    Apellido_Materno: string,
    Id_Usuario: string
};

export interface infoUsuario{
   
        Apellido_Paterno: "",
        Apellido_Materno: "",
        Nombres: "",
        RFC: "",
        CURP: "",
        Contacto_Principal: "",
        Contacto_Emergencia: "",
        Email: "",
        Updated_By: "",
        Img_Profile: "",
        Nombre_Usuario: "" 
};

export interface tipoUsuario{
    Id_Tipo_Usuario: "",
    Tipo_Usuario: ""
};

export interface tipoSocio{
    Id_Tipo_Socio: "",
    Tipo_Socio: ""
};


export interface sendCorreo{
    Contacto_Principal: "",
    Email:"",
};


export interface reasignacionA{
    Id_Usuario: "",
    Nombre_Usuario: "",
    Id_Inmueble: "",
    Calle: "",
    Id_Estatus_Publicacion: "",
    Nombre_Inmueble: "",
    Id_Tipo_Usuario:"",
    Nombre_Razon_Social:"",
    Id_Socio:"",
    IdUsu:""
}
export interface AsigarReAsignar{
    
    Nombre_Publicacion: "",
    No_asignados: "",
    Asignados: "",
}

export interface asignacionA{
    Id_Usuario: "",
    Nombres: "",
    Apellido_Paterno: "",
    Apellido_Materno: "",
    
}


export interface inmueblesBuscados{
Asentamiento: "",
Codigo_Postal: "",
Descripcion_Publicacion: "",
Estado: "",
Id_Inmueble: "",
Id_Publicador: ""
Municipio: ""
Nombre_Publicacion: ""
Picture1: ""
Precio_Final: ""
Tipo_Asentamiento: ""
id_asentamiento: "",
latitud: number,
longitud: number

};
 export interface medioC{
    id_Medio_Contacto:"",	
    Medio_Contacto:"",
 };



export interface infoInmuebles{
    Nombre_Inmueble: "",
        Descripcion_Inmueble: "",
        Calle: "",
        Num_Ext: "",
        Num_Int: "",
        Terreno_M2: "",
        Construccion_M2: "",
        Recamara: "",
        Bano: "",
        Cocina_Integral: "",
        Num_Pisos: "",
        Antiguedad: "",
        Acabados: "",
        Alberca: "",
        Jardin: "",
        Gimnasio: "",
        Roof_Garden: "",
        Estacionamiento: "",
        Ubicacion_Maps: "",
        Picture1: "",
        Picture2: "",
        Picture3: "",
        Picture4: "",
        Picture5: "",
        360: "",
        Video: "",
        Id_Asentamiento: "",
        Id_Tipo_Inmueble: "",
        Id_Usuario: "",
        Nombre_Usuario: "",
        Img_Profile: "",
        Contacto_Principal: "",
        Email: "",
        Nombre_Publicacion: "",
        Descripcion_Publicacion: "",
        Id_Tipo_Publicacion: String,
        Precio_Final:"",
        Id_Publicacion:"",
};

export interface mostrarcita{
         Id_Prospecto: "",
        Nombre_Publicacion: "",
        Calle: "",
        Num_Ext: "",
        Num_Int: "",
        Fecha: "",
        Hora: "",
        Email: "",
        Nombre: "",
        Telefono: "",
        Mensaje: "",
        Id_Usuario: "",
        Medio_Contacto: "",
        Id_Publicacion: ""

};

export interface inventarioAsesores {
    Id_Publicacion:"",
    Nombre_Publicacion:"",
    Calle:"",
    Municipio:"",
    Nombre:"",
    id_Usuario:"",
    Id_Estatus_Publicacion:""
    Num_Ext:"",
    Num_Int:""
}

export interface detallesdelInmueble {
    Id_Publicacion:"",
    Nombre_Publicacion:"",
    Descripcion_Inmueble:"",
    Terreno_M2:"",
    Construccion_M2:"",
    Recamara:"",
    Bano:"",
    Cocina_Integral:"",
    Num_Pisos:"",
    Antiguedad:"",
    Acabados:"",
    Alberca:"",
    Jardin:"",
    Gimnasio:"",
    Roof_Garden:"",
    Estacionamiento:""
}


export interface Notis{
    Id_Notificaciones: "",
    Mensaje: "",
    Id_Publicador: "",
    Fecha: "",
    Estado: "",
    Created_By: "",
    Created_Date: "",
    Updated_By: "",
    Updated_Date: ""
};


export interface inmobiliaria{
    Id_Socio: "",
    Nombre_Razon_Social: "",
    Img_Logo: "",
    RFC: "",
    Email: "",
    Tel_Empresa: "",
    Calle: "",
    Num_Ext: "",
    Num_Int: "",
    Id_Asentamiento: "",
    Id_Tipo_Socio: "",
    Id_Usuario: "",
    Created_By: "",
    Created_Date: "",
    Updated_By: "",
    Updated_Date: ""
};


export interface SolicitudCambio{
    Id_Usuario:"",
    Id_Publicacion:"",
    Nombre_Publicacion:"",
    Nombre_Usuario:"",
    Id_Socio:""
};


export interface Publicaciones{
    Id_Inmueble: "",
    Nombre_Publicacion: "",
    Descripcion_Publicacion: "",
    Id_Estatus_Publicacion: "",
    Created_By: "",
    Picture1: "",
    Nombre_Usuario: "",
    Estatus_Publicacion: ""
};

export interface ActulizarInmueble{
    Id_Inmueble: "",
    Id_Tipo_Inmueb:"",
    Nombre_Inmueble:"",
    Descripcion_Inmueble: "",
    Calle: "",
    Num_Ext: "",
    Num_Int: "",
    Terreno_M2: "",
    Construccion_M2: "",
    Recamara: "",
    Bano: "",
    Cocina_Integral: "",
    Num_Pisos: "",
    Antiguedad: "",
    Acabados: "",
    Alberca: "",
    Jardin: "",
    Gimnasio: "",
    Roof_Garden: "",
    Estacionamiento: "",
    Id_Publicacion: "",
    Precio_Min: "",
    Precio_Max: "",
    Precio_Final: "",
    Id_Estatus_Publicacion: ""
}
export interface EstatusInmueble{
    Id_Estatus_Publicacion:"",
    Estatus_Publicacion:"",

}

export interface mostrarFechasHito{
    Asunto: "",
    Fecha_Inicio: "",
    Fecha_Cierre: "",
    Descripcion: "",
    Notificaciones: "",
    Estatus: ""
}

export interface compras{
    Id_Compra: "",
    Fecha_Inicio: "",
    Estatus_Suscripcion: "",
    Estatus_Pago: "",
    Plan: "",
    Precio_Plan: ""
}


export interface InventarioInmuebles{
    Id_Publicacion:"",
    Nombre_Inmueble: "",
    Calle: "",
    Num_Ext: "",
    Municipio: "",
    Estatus_Publicacion: ""
    
}

export interface SolicitudCambioA{
    IdSocUsu:"",
    Id_Publicador: ""
}


