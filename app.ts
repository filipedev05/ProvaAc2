import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Gerenciador de Tarefas</h1>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.css'
})
export class AppComponent {}
