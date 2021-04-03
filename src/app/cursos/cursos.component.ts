import { CursosService } from './curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  constructor(private _cursosService: CursosService) { }

  ngOnInit(): void {

  }

}
