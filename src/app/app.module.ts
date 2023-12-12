import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header/header.component';
import { HeaderConnecteComponent } from './composants/header-connecte/header-connecte.component';
import { AuthComponent } from './composants/auth/auth.component';
import { FooterComponent } from './composants/footer/footer.component';
import { PolitiquesConfidentialitesComponent } from './composants/politiques-confidentialites/politiques-confidentialites.component';
import { ConditionsGeneralesComponent } from './composants/conditions-generales/conditions-generales.component';
import { PageaccueilComponent } from './composants/pageaccueil/pageaccueil.component';
import { AproposComponent } from './composants/apropos/apropos.component';
import { ProjetsComponent } from './composants/projets/projets.component';

import { ForumComponent } from './composants/forum/forum.component';

import { MenuComponent } from './composants/menu/menu.component';
import { RessourcesComponent } from './composants/ressources/ressources.component';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './composants/auth/login/login.component';
import { SignupComponent } from './composants/auth/signup/signup.component';
import { ListForumComponent } from './composants/list-forum/list-forum.component';

import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderConnecteComponent,
    AuthComponent,
    FooterComponent,
    PolitiquesConfidentialitesComponent,
    ConditionsGeneralesComponent,

    PageaccueilComponent,
    AproposComponent,
    ProjetsComponent,



    ForumComponent,

    MenuComponent,

    RessourcesComponent,
      LoginComponent,
      SignupComponent,
      ListForumComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

<<<<<<< HEAD
    // HttpClientModule,
=======
>>>>>>> 2c46919d067d57c348a84cca31c18cbe793f3bfe

    FormsModule,


    HttpClientModule,
    ReactiveFormsModule,

    CommonModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
