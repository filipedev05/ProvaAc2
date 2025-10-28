import { Routes } from '@angular/router';
import { CadastrarTarefa } from './components/cadastrar-tarefa/cadastrar-tarefa';
import { ListaTarefas } from './components/lista-tarefas/lista-tarefas';

export const routes: Routes = [
  { path: '', redirectTo: 'cadastrar-tarefa', pathMatch: 'full' },
  { path: 'cadastrar-tarefa', component: CadastrarTarefa },
  { path: 'lista-tarefas', component: ListaTarefas },
];