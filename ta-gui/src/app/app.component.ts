import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})  
export class AppComponent {
  aluno: Aluno = {nome: "Gabriel", cpf: "123.456.789-10", email: "email@email.com", github: ""};
}

export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  github: string;
}
