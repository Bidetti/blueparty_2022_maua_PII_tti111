import { Component,} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  list_sidenav = [
    { name: 'Início', icon: 'fa fa-home', link: '/dashboard', notifications: 0, typenotification: 'secondary'},
    { name: 'Perfil', icon: 'fa fa-user', link: '/dashboard/perfil', notifications: 2, typenotification: 'warning'},
    { name: 'Compras', icon: 'fa fa-shopping-cart', link: '/dashboard/compras', notifications: 1, typenotification: 'primary'},
    { name: 'Criar Evento', icon: 'fa fa-calendar', link: '/dashboard/criar-evento', notifications: 0, typenotification: 'secondary'},
    { name: 'Configurações', icon: 'fa fa-cog', link: '/dashboard/configuracoes', notifications: 4, typenotification: 'danger'}
  ];
}
