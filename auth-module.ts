import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app/app.routes';


@NgModule({
    imports: [RouterModule.forRoot(routes), FormsModule, BrowserModule],
    exports: [RouterModule]
  })
export class AuthModule { }