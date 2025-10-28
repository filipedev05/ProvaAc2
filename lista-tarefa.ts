import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { TarefaService } from '../../tarefa-service';
import { Tarefa } from '../../models/tarefa';

@Component({
  selector: 'app-lista-tarefa',
  standalone: true,
  templateUrl: './lista-tarefa.html',
  styleUrls: ['./lista-tarefa.css']
})
export class ListaTarefas implements OnInit {
  @ViewChild('tarefaTemplate', { read: TemplateRef }) tarefaTemplate!: TemplateRef<any>;
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private svc: TarefaService, private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.atualizarLista();
  }

  atualizarLista() {
    this.container.clear();
    const tarefas = this.svc.listar();

    if (tarefas.length === 0) {
      const elemento = document.createElement('p');
      elemento.textContent = 'Nenhuma tarefa cadastrada';
      this.container.element.nativeElement.appendChild(elemento);
    } else {
      tarefas.forEach((tarefa) => {
        const view = this.container.createEmbeddedView(this.tarefaTemplate, { tarefa });
        view.detectChanges();
      });
    }
  }

  remover(id: number) {
    this.svc.remover(id);
    this.atualizarLista();
  }

  concluir(id: number) {
    this.svc.marcarConcluida(id);
    this.atualizarLista();
  }

  irParaCadastro() {
    this.router.navigate(['/cadastrar-tarefa']);
  }

  contar(): number {
    return this.svc.contar();
  }
}
