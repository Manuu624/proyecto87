export interface Usuario {
    uid: string | any; // id para autentificación de Firebase
    nombre: string; //nombre
    email: string; //email
    rol: string; //roles
    contrasena: string; //contraseña
}