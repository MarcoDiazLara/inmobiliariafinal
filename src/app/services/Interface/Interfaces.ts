export interface Estados {
    id_Estado: string
    Estado: string
};

export interface Municipios {
    id_Municipio: string
    Municipio: string
};

export interface Asentamiento {
    id_asentamiento: string
    Asentamiento: string
};

export interface Asesores {
    Nombres: string,
    Apellido_Paterno: string,
    Apellido_Materno: string,
    Id_Usuario: string
};

export interface infoUsuario {

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

export interface tipoUsuario {
    Id_Tipo_Usuario: "",
    Tipo_Usuario: ""
};

export interface tipoSocio {
    Id_Tipo_Socio: "",
    Tipo_Socio: ""
};


export interface sendCorreo {
    Contacto_Principal: "",
    Email: "",
};


export interface reasignacionA {
    Id_Usuario: "",
    Nombre_Usuario: "",
    Id_Inmueble: "",
    Calle: "",
    Id_Estatus_Publicacion: "",
    Nombre_Inmueble: "",
    Id_Tipo_Usuario: "",
    Nombre_Razon_Social: "",
    Id_Socio: "",
    IdUsu: ""
}
export interface AsigarReAsignar {
    Nombre_Publicacion: "",
    No_asignados: "",
    Asignados: "",
}

export interface asignacionA {
    Id_Usuario: "",
    Nombres: "",
    Apellido_Paterno: "",
    Apellido_Materno: "",

}
export interface inmueblesBuscados {
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
export interface medioC {
    id_Medio_Contacto: "",
    Medio_Contacto: "",
};



export interface infoInmuebles {
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
    Precio_Final: "",
    Id_Publicacion: "",
    Id_Inmueble:""
};

export interface mostrarcita {
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
    Id_Inmueble: "",
    Nombre_Inmueble: "",
    Calle: "",
    Municipio: "",
    Nombre: "",
    id_Usuario: "",
    Id_Estatus_Publicacion: ""
    Num_Ext: "",
    Num_Int: ""
}

export interface detallesdelInmueble {
    Id_Inmueble: "",
    Nombre_Inmueble:"",
    Descripcion_Inmueble: "",
    Calle: "",
    Num_Ext: "",
    Num_Int:"",
    Terreno_M2: "",
    Construccion_M2: "",
    Recamara: "",
    Bano: "",
    Num_Pisos: "",
    Antiguedad: "",
    Acabados: "",
    Gimnasio: "",
    Estacionamiento: "",
    Jardin: "",
    Cocina_Integral: "",
    Alberca: "",
    Roof_Garden: "",
    Precio_Min:"",
    Precio_Max:"",
    Precio_Final:""
}


export interface Notis {
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


export interface inmobiliaria {
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


export interface SolicitudCambio {
    Id_Usuario: "",
    Id_Publicacion: "",
    Nombre_Publicacion: "",
    Nombre_Usuario: "",
    Id_Socio: ""
};


export interface Publicaciones {
    Id_Inmueble: "",
    Nombre_Publicacion: "",
    Descripcion_Publicacion: "",
    Id_Estatus_Publicacion: "",
    Created_By: "",
    Picture1: "",
    Nombre_Usuario: "",
    Estatus_Publicacion: ""
};

export interface ActulizarInmueble {
    Id_Inmueble: "",
    Id_Tipo_Inmueb: "",
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
    Id_Publicacion: "",
    Precio_Min: "",
    Precio_Max: "",
    Precio_Final: "",
    Id_Estatus_Publicacion: ""
}
export interface EstatusInmueble {
    Id_Estatus_Publicacion: "",
    Estatus_Publicacion: "",

}

export interface mostrarFechasHito {
    Id_Fecha_Hito: "",
    Asunto: "",
    Fecha_Inicio: "",
    Fecha_Cierre: "",
    Descripcion: "",

}

export interface compras {
    Id_Compra: "",
    Fecha_Inicio: "",
    Estatus_Suscripcion: "",
    Estatus_Pago: "",
    Plan: "",
    Precio_Plan: ""
}


export interface InventarioInmuebles {
    Id_Publicacion: "",
    Nombre_Inmueble: "",
    Calle: "",
    Num_Ext: "",
    Municipio: "",
    Estatus_Publicacion: ""

}
export interface selecionD {

    Id_Usuario: "",
    Nombres: "",
    Apellido_Paterno: "",
    Apellido_Materno: ""
}

export interface SolicitudCambioA {
    IdSocUsu: "",
    Id_Publicador: ""
}

export interface DatosEmpresa {
    Nombre_Razon_Social: "",
    Img_Logo: "",
    RFC: "",
    Email: "",
    Tel_Empresa: "",
    Calle: "",
    Num_Ext: "",
    Num_Int: "",
    Id_Asentamiento: "",
    Id_Tipo_Socio: ""

}


export interface tblUsers {
    Id_Usuario: "",
    Nombre_Usuario: "",
    Tipo_Usuario: ""
}


export interface informaUsuario {
    Apellido_Paterno: "",
    Apellido_Materno: "",
    Nombres: "",
    Contacto_Principal: "",
    Contacto_Emergencia: "",
    Email: "",
    Tipo_Usuario: ""
};

export interface asignacionBro {
    Id_Usuario: "",
    Nombres: "",
    Apellido_Paterno: "",
    Apellido_Materno: ""

}

export interface informacionA {
    Asesor: "",
    Nombres:"",
    App_Paterno: "",
    App_Materno: "",
}
export interface Broker {
    Id_Usuario: "",
    Apellido_Paterno: "",
    Apellido_Materno: "",
    Nombres: ""
}
export interface Asesor {
    Id_Usuario: "",
    Apellido_Paterno: "",
    Apellido_Materno: "",
    Nombres: ""
}

export interface AsignacionBroker {
    Nombre_Inmueble: "",
    Calle: "",
    Id_Inmueble: "",
    Usuario: "",
    broker: "",
    Apellido_Paterno: "",
    Apellido_Materno: ""
}

export interface HitoGeneral {
    Asunto: "",
    Fecha_Inicio: "",
    Fecha_Cierre: "",
    Descripcion: "",
    Id_Fecha_Hito: "",
    Apellido_Paterno: "",
    Apellido_Materno: "",
    Nombres: ""
}

export interface InventarioBroker {
    Id_Inmueble: "",
    Nombre_Inmueble: "",
    Calle: "",
    Num_Ext: "",
    Municipio: "",
    Estatus_Publicacion: ""

}
export interface Estatus {
    Estatus: "",
    Apellido_Paterno: "",
    Apellido_Materno: "",
    Nombres: "",
    Tipo_Usuario: "",
    Id_Usuario: ""
}

export interface inmueblesArviceSpace {
    Nombre_Inmueble: "",
    dueno: "",
    dueno_P: "",
    dueno_M: "",
    Id_Inmueble: ""

};

export interface infoAsesor{
    Nombres: "",
    Apellido_Paterno: "",
    Apellido_Materno: "",
    Contacto_Principal: "",
    Email: "",
    Nombre_Razon_Social: ""
};

export interface Interesados{
    Nombres: "",
    Apellido_Paterno: "",
    Apellido_Materno: "",
    Nombre_Inmueble: "",
    Contacto_Principal: "",
    Contacto_Emergencia: "",
    Email: ""
};

export interface Asig_Inmuebles{
    Id_Inmueble: "",
    Nombre_Inmueble: "",
    Calle: "",
    Num_Ext: "",
    Municipio: "",
    Nombres: "",
    Apellido_Paterno: "",
    Apellido_Materno: ""
};


export interface Sepomex{
    d_codigo: string,
    d_asenta: string,
    d_tipo_asenta:string,
    D_mnpio:string,
    d_estado:string,
    d_ciudad:string,
    d_CP: string,
    c_estado:string,
    c_oficina:string,
    c_tipo_asenta:string,
    c_mnpio:string,
    id_asenta_cpcons:string,
    d_zona:string,
    c_cve_ciudad:string,
    c_CP:string
};

export interface Asig_Inmu_Asesor{
    Id_Asesor: "",
    Nombres: "",
    Apellido_Paterno: "",
    Apellido_Materno: ""
};

export interface Inmuebles {
    Id_Tipo_Inmueble: string,
    Tipo_Inmueble: string
};

export interface TipoOperacion {
    Id_Tipo_Publicacion: string,
    Tipo_Publicacion: string
};


export interface CardInmuebles {
    Id_Publicacion: any,
    Nombre_Publicacion: any,
    Descripcion_Publicacion: any,
    Precio_Min: any,
    Precio_Max: any,
    Domicilio: any,
    Gimnasio: any,
    Roof_Garden: any,
    Estacionamiento: any,
    Jardin: any,
    Alberca: any,
    Picture: string,
    Terreno_M2: string,
    Construccion_M2: string,
    Recamara: string,
    Bano: string,
    Id_Publicador: string
};

export interface inmusinimagenes{
    Nombre_Inmueble: "",
    Calle: "",
    Num_Ext: "",
    Id_Inmueble: "",
    Id_Usuario: "",
    Nombres: ""
}

export interface duenosCM{
    Id_Usuario: "",
    Nombres: "",
    Apellido_Paterno: "",
    Apellido_Materno: ""
}