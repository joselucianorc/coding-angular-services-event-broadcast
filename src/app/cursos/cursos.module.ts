import { CursosService } from '../cursos/curso.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from '../cursos/cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ]//,
  //providers: [CursosService]
})
export class CursosModule { }
