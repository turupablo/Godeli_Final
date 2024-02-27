// Generated by https://quicktype.io

export interface RecipesPaginatedResp {
    status: string;
    data:   Datum[];
}

export interface Datum {
    id_receta:          number;
    titulo:             string;
    descripcion:        string;
    preparacion:        string;
    youtube:            null;
    tiempo_preparacion: number;
    rendimiento:        number;
    calorias:           number;
    proteinas:          number;
    grasas:             number;
    puntaje:            null;
    ingredientes:       Ingrediente[];
    imagenes:           Imagene[];
}

export interface Imagene {
    id_imagen: number;
    url:       string;
}

export interface Ingrediente {
    id_ingrediente: number;
    descripcion:    string;
    cantidad:       string;
}

export interface RecetaFull{
    descripcion:        string;
    preparacion:        string;
    youtube:            null;
    tiempo_preparacion: number;
    rendimiento:        number;
    calorias:           number;
    proteinas:          number;
    grasas:             number;
    ingredientes:       Ingrediente[];
    imagenes:           Imagene[];
}