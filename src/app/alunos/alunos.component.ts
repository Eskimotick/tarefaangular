import { Component, OnInit } from '@angular/core';
import { ALUNOS } from '../mock-alunos';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  //aluno = "Matheus"
  alunos = ALUNOS;
  selectedAluno: Aluno;

  onSelect(aluno: Aluno):void {
    this.selectedAluno = aluno;
  }


  constructor() { }

  ngOnInit() {
  }

}
