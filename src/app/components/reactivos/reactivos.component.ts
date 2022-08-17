import { Component, OnInit } from '@angular/core';
import { ReactivosService, Alumno } from '../../services/reactivos.service';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-reactivos',
  templateUrl: './reactivos.component.html',
  styleUrls: ['./reactivos.component.css']
})
export class ReactivosComponent implements OnInit {
  alumnos!: Observable<Alumno[]>;

  constructor( private reactivosService: ReactivosService) { }

  ngOnInit(): void {
    this.obtenerAlumnos();

  }

  obtenerAlumnos(){
    this.alumnos = this.reactivosService.obtenerAlumnos()
      .pipe(filter(alumno => alumno[0].sexo === 'F'));


  }


}
