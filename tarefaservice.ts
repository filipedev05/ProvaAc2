import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: Tarefa[] = [];

  listar(): Tarefa[] {
    return this.tarefas;
  }

  adicionar(nome: string): void {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      nome,
      concluida: false
    };
    this.tarefas.push(novaTarefa);
  }

  remover(id: number): void {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
  }

  marcarConcluida(id: number): void {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
    }
  }
}
