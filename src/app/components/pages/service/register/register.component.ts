import { Component, OnInit } from '@angular/core';
const baseUrl = 'http://localhost:3000/';
const protocolo = 'http'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async cadastrarUsuario() {
    const userCadastroInput = document.querySelector("#userField") as HTMLInputElement;
    const passwordCadastroInput = document.querySelector("#passwordField") as HTMLInputElement;
    const userCadastro = userCadastroInput.value;
    const passwordCadastro = passwordCadastroInput.value;

  }
}
