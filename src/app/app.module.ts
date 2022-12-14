import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgChartsModule } from 'ng2-charts';

//Components
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HomePageComponent } from './components/pages/homepage/homepage.component';
import { SobreNosComponent } from './components/pages/sobre-nos/sobre-nos.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { LoginComponent } from './components/pages/service/login/login.component';
import { RegisterComponent } from './components/pages/service/register/register.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { CadastroComponent } from './components/pages/dashboard/cadastro/cadastro.component';
import { EventoComponent } from './components/pages/evento/evento.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { SidenavComponent } from './components/pages/dashboard/sidenav/sidenav.component';
import { PagamentoComponent } from './components/pages/pagamento/pagamento.component';
import { ComprasComponent } from './components/pages/dashboard/compras/compras.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    NavComponent,
    SobreNosComponent,
    ContatoComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    CadastroComponent,
    EventoComponent,
    DashboardComponent,
    SidenavComponent,
    PagamentoComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CarouselModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
