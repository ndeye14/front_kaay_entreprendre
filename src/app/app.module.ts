import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    RessourcesComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
