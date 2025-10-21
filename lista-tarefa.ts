import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TarefaService } from '../tarefaservice';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-lista-tarefa',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './lista-tarefa.html',
  styleUrls: ['./lista-tarefa.css'] // corrigido
})
export class ListaTarefaComponent implements OnInit {
  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.atualizarLista();
  }
  atualizarLista() {
    this.tarefas = this.tarefaService.listar();
  }

  remover(id: number) {
    this.tarefaService.remover(id);
    this.atualizarLista();
  }

  concluir(id: number) {
    this.tarefaService.marcarConcluida(id);
    this.atualizarLista(); 
  }
}
