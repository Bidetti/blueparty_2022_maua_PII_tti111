import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HomePageComponent } from './components/pages/homepage/homepage.component';
import { SobreNosComponent } from './components/pages/sobre-nos/sobre-nos.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { LoginComponent } from './components/pages/service/login/login.component';
import { RegisterComponent } from './components/pages/service/register/register.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { CadastroComponent } from './components/pages/service/cadastro/cadastro.component';

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
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
