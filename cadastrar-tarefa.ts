import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TarefaService } from '../../services/tarefa-service';

@Component({
  selector: 'app-cadastrar-tarefa',
  standalone: true, 
  imports: [FormsModule, RouterModule],
  templateUrl: './cadastrar-tarefa.html',
  styleUrls: ['./cadastrar-tarefa.css']
})
export class CadastrarTarefa {
  titulo: string = '';

  constructor(private svc: TarefaService, private router: Router) {}

  cadastrar() {
    if (this.titulo.trim() !== '') {
      this.svc.adicionar(this.titulo);
      this.titulo = '';
    }
  }

  irParaLista() {
    this.router.navigate(['/lista-tarefas']);
  }
}
