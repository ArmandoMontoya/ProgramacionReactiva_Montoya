import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Alumno {
  numeroControl: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  fechaNacimiento: Date;
  curp: string;
  sexo: string;
  direccion: string;
  contacto: string;
  numeroContacto: string;
}



@Injectable({
  providedIn: 'root'
})
export class ReactivosService {

  alumnos: Alumno[] = [
    {numeroControl: '14256545', nombre: 'Ismael', apellidoPaterno: 'Díaz', apellidoMaterno: 'Flores', fechaNacimiento: new Date(1992, 11, 10), curp: 'sdfjhsfjhs76', sexo: 'M', direccion: 'skdfsfjskf', contacto: 'Jorge Alberto Díaz', numeroContacto: '45454' },
    {numeroControl: '34534534', nombre: 'Eduardo', apellidoPaterno: 'Hernaandez', apellidoMaterno: 'Morales', fechaNacimiento: new Date(1996, 0, 16), curp: 'kjhjsad756asd', sexo: 'M', direccion: 'skdfsfjskf', contacto: 'Erick Morales', numeroContacto: '557878' },
    {numeroControl: '23453453', nombre: 'Fernando', apellidoPaterno: 'Gutierrez', apellidoMaterno: 'Reyes', fechaNacimiento: new Date(1999, 2, 20), curp: '545asdasd89', sexo: 'M', direccion: 'skdfsfjskf', contacto: 'Tadeo Reyes', numeroContacto: '774448' },
    {numeroControl: '98659568', nombre: 'Jorge', apellidoPaterno: 'González', apellidoMaterno: 'Torres', fechaNacimiento: new Date(1990, 5, 5), curp: 'gfhnfgj55554', sexo: 'M', direccion: 'skdfsfjskf', contacto: 'Ofelia Torres', numeroContacto: '32345454' },
    {numeroControl: '23234756', nombre: 'Miguel', apellidoPaterno: 'Rodriguez', apellidoMaterno: 'Mendoza', fechaNacimiento: new Date(1993, 10, 2), curp: 'sfsdfsdf1545zxc', sexo: 'M', direccion: 'skdfsfjskf', contacto: 'Rosalba Rodriguez', numeroContacto: '7474546' },
    {numeroControl: '23434855', nombre: 'Andrea', apellidoPaterno: 'Acevedo', apellidoMaterno: 'Ortiz', fechaNacimiento: new Date(1997, 8, 1), curp: 'zvbs457661', sexo: 'F', direccion: 'skdfsfjskf', contacto: 'Belem Ortiz', numeroContacto: '323464' },
    {numeroControl: '59698543', nombre: 'Josefina', apellidoPaterno: 'Pozos', apellidoMaterno: 'Castillo', fechaNacimiento: new Date(1991, 3, 22), curp: 'setrt124898', sexo: 'F', direccion: 'skdfsfjskf', contacto: 'Ortencia Castillo', numeroContacto: '65768786' },
    {numeroControl: '98293844', nombre: 'Irlanda', apellidoPaterno: 'Garcia', apellidoMaterno: 'Alvarez', fechaNacimiento: new Date(1995, 7, 23), curp: 'puiuo4545fsd', sexo: 'F', direccion: 'skdfsfjskf', contacto: 'Basilio Garcia', numeroContacto: '7845645' },
    {numeroControl: '46537344', nombre: 'Margarita', apellidoPaterno: 'Zavala', apellidoMaterno: 'Medina', fechaNacimiento: new Date(1997, 9, 12), curp: 'uikukuyk548', sexo: 'F', direccion: 'skdfsfjskf', contacto: 'Oscar Zavala', numeroContacto: '999155' },
    {numeroControl: '78592442', nombre: 'Octavio', apellidoPaterno: 'Ramirez', apellidoMaterno: 'Vargas', fechaNacimiento: new Date(1995, 4, 10), curp: 'kjkyter4784', sexo: 'M', direccion: 'skdfsfjskf', contacto: 'Cesar Ramirez', numeroContacto: '5474121' }
  ];

  AlumnosObservable: Observable<Alumno[]>;

  constructor() {
    this.AlumnosObservable = new Observable<Alumno[]>((suscriptor) => {
      suscriptor.next(this.alumnos);
    })
  }

  obtenerAlumnos(): Observable<Alumno[]>{
    return this.AlumnosObservable;
  }
}
