import { Component, OnInit } from '@angular/core';
import { ReactivosService, Alumno } from '../../services/reactivos.service';
import { filter, map, Observable, pipe } from 'rxjs';

@Component({
  selector: 'app-reactivos',
  templateUrl: './reactivos.component.html',
  styleUrls: ['./reactivos.component.css']
})
export class ReactivosComponent implements OnInit {
  alumnos: any;
  profesores:any;
  alumnosConFechaMayorA:any;

  fecha:any = new Date(1996, 0, 16);

  constructor(private reactivosService: ReactivosService) { }

  ngOnInit(): void {
    this.obtenerAlumnos();
    this.obternerFechaNacimiento();
    this.obtenerProfesores();
  }

  obtenerAlumnos() {
    this.reactivosService.obtenerAlumnos().pipe(
      map((alumnos: Alumno[]) => alumnos.filter(alumno => alumno.sexo === 'F'))
    ).subscribe((alumnos) => {
      this.alumnos = alumnos;
    })
  }



  obternerFechaNacimiento() {
    const promise = new Promise<void>((resolve, reject) => {
      this.reactivosService.obtenerAlumnos().subscribe({
        next: (res: any) => {
          this.alumnosConFechaMayorA = res.map((res: any) =>
          {
            if( res.fechaNacimiento > this.fecha){
              return res
            }
            else{
              return ''
            }
          }
          );
          resolve();
        },
        error: (err: any) => {
          reject(err);
        },
        complete: () => {
          console.log('Promesa completa');
        },
      });
    });
    return promise;
  }


  obtenerProfesores(){
    this.profesores = this.reactivosService.obternerProfesores()
  }

  ngOnDestroy(): void {
    this.alumnos.unsubscribe();
    this.profesores.unsubscribe();
  }



}
