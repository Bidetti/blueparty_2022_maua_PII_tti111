import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/pages/homepage/homepage.component';
import { LoginComponent } from './components/pages/service/login/login.component';
import { RegisterComponent } from './components/pages/service/register/register.component';
import { SobreNosComponent } from './components/pages/sobre-nos/sobre-nos.component';
import { CadastroComponent } from './components/pages/dashboard/cadastro/cadastro.component';
import { EventoComponent } from './components/pages/evento/evento.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { PagamentoComponent } from './components/pages/pagamento/pagamento.component';
import { ComprasComponent } from './components/pages/dashboard/compras/compras.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "sobre-nos",
    component: SobreNosComponent
  },
  {
    path: "evento/:id",
    component: EventoComponent
  },
  {
    path: "contato",
    component: ContatoComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "dashboard/criar-evento",
    component: CadastroComponent
  },
  {
    path: "dashboard/compras",
    component: ComprasComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "pagamento",
    component: PagamentoComponent
  },
  {
    path: "**", pathMatch: "full",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
