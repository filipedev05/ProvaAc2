import { Routes } from '@angular/router';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa';
import { ListaTarefaComponent } from './lista-tarefa/lista-tarefa';
import { RouterLink } from '@angular/router'; 

export const routes: Routes = [
  { path: '', redirectTo: 'cadastrar', pathMatch: 'full' },
  { path: 'cadastrar', component: CadastrarTarefaComponent },
  { path: 'lista', component: ListaTarefaComponent }
];
