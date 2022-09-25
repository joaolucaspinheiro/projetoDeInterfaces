import { style } from "@angular/animations";
import { NgModule } from '@angular/core';
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Usuario } from "modelo/usuarios";
@Component({
  selector: 'login',
  templateUrl: './login.Component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  public title: string;
  // DECLARAÇÃO DO OBJETO USUÁRIO
  public usuario: Usuario;

  constructor(
    // CONFIGURAÇÃO DAS PROPRIEDADES DAS ROTAS PARA DEFINIR AS CLASSES
    private _rota: ActivatedRoute,
    private _rotas: Router
  ){
    this.title = "LOGIN";
    // DECLARAÇÃO DE PROPRIEDADE VAZIA, PARA RECEBER VALORES DO FORMULÁRIO
    this.usuario = new Usuario(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""  
    )

  }

  ngOnInit(): void {
    console.log('Componente cadastro carregado...');
  }
  // MÉTODO PARA VISUALIZAR DADOS DO USUÁRIO NA CONSOLE.
  onSubmit() {
    console.log(this.usuario);
  }
}