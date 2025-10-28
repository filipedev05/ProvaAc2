import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: Tarefa[] = [];
  private contador = 0;

  listar() {
    return this.tarefas;
  }

  adicionar(titulo: string) {
    this.tarefas.push({
      id: ++this.contador,
      titulo,
      concluida: false
    });
  }

  remover(id: number) {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
  }

  marcarConcluida(id: number) {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) tarefa.concluida = true;
  }

  contar(): number {
    return this.tarefas.length;
  }
}
