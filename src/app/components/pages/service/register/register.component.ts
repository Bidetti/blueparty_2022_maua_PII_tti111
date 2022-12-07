import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

  cadastrarUsuario(): void {
    this.exibirAlerta('.alert-register', 'Cadastro realizado com sucesso!', ['show', 'alert-success'], ['d-none', 'alert-danger'], 2000)
    setTimeout(() => {
      this.router.navigate(['../login'], { relativeTo: this.route })
    }, 2000)
  }
}
