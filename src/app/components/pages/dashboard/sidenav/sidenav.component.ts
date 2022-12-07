import { Component, OnInit,} from '@angular/core';
import {Modal} from 'bootstrap';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})


export class SidenavComponent implements OnInit{
  ngOnInit(): void {
  }

  constructor() { }

  list_sidenav = [
    { name: 'Início', icon: 'fa fa-home', link: '/dashboard', notifications: 0, typenotification: 'secondary'},
    { name: 'Perfil', icon: 'fa fa-user', link: '/dashboard/perfil', notifications: 2, typenotification: 'warning'},
    { name: 'Compras', icon: 'fa fa-shopping-cart', link: '/dashboard/compras', notifications: 1, typenotification: 'primary'},
    { name: 'Criar Evento', icon: 'fa fa-calendar', link: '/dashboard/criar-evento', notifications: 0, typenotification: 'secondary'},
    { name: 'Configurações', icon: 'fa fa-cog', link: '/dashboard/configuracoes', notifications: 4, typenotification: 'danger'}
  ];


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

  salvarAlteracoesConfig(): void {
    this.exibirAlerta('.alert-config', 'Alterações salvas com sucesso!', ['show', 'alert-success'], ['d-none', 'alert-danger'], 1800)
  }


}
