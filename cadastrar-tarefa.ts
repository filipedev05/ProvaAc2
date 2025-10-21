import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TarefaService } from '../tarefaservice';

@Component({
  selector: 'app-cadastrar-tarefa',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-tarefa.html',
  styleUrl: './cadastrar-tarefa.css'
})
export class CadastrarTarefaComponent {
  nome: string = '';

  constructor(private tarefaService: TarefaService) {}

  cadastrar() {
    if (this.nome.trim()) {
      this.tarefaService.adicionar(this.nome);
      this.nome = '';
      alert('Tarefa cadastrada com sucesso!');
    }
  }
}
