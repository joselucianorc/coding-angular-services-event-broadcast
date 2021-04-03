import { CursosService } from './../cursos/curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [ CursosService ]
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private _cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this._cursosService.getCursos();
  }

  onAddCurso(curso: string) {
    this._cursosService.addCurso(curso);
  }

}
