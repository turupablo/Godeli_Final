// Generated by https://quicktype.io

export interface ProfilePaginatedResp {
    status: string;
    data:   Datum[];
}

export interface Datum {
    nombre:             string;
    correo_electronico: string;
    url_imagen_perfil:  string;
}