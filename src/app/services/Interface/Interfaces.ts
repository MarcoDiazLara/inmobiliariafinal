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
}


export interface inmueblesBuscados{
    Nombre_Publicacion: "",
    Precio_Final: "",
    Descripcion_Publicacion: "",
    Codigo_Postal: "",
    id_asentamiento: "",
    Asentamiento: "",
    Picture1: "",
    Tipo_Asentamiento: "",
    Municipio: "",
    Estado: "",
    Id_Inmueble: "",
    Id_Publicador: ""

};
 export interface medioC{
    id_Medio_Contacto:"",	
    Medio_Contacto:"",
 }


