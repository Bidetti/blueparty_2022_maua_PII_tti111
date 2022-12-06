import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  exibirAlerta(seletor: any, conteudo: any, classesAAdicionar: any, classeARemover: any, timeout: number | undefined): void {
    //exibir um alerta instruindo o usuário a preencher todos os campos
    let alert = document.querySelector(seletor)
    alert.innerHTML = conteudo
    // alert.classList.add('show', 'alert-danger')
    alert.classList.add(...classesAAdicionar)
    alert.classList.remove(...classeARemover)
    setTimeout(() => {
      alert.classList.remove('show')
      alert.classList.add('d-none')
    }, timeout)
  }

  conectarUsuario(): void {
    this.exibirAlerta('.alert-login', 'Login realizado com sucesso!', ['show', 'alert-success'], ['d-none', 'alert-danger'], 1500)
    setTimeout(() => {
      this.router.navigate(['../dashboard'], { relativeTo: this.route })
    }, 1500)
  }
}
