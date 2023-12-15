import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

import { SignupComponent } from './composants/auth/signup/signup.component';
import { ListForumComponent } from './composants/list-forum/list-forum.component';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './composants/auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectModule } from './project/project.module';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';
import { ContactTrashComponent } from './contact-trash/contact-trash.component';



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
      ListForumComponent,
      ContactAddComponent,
      ContactListComponent,
      ContactDetailComponent,
      ContactUpdateComponent,
      ContactTrashComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


    FormsModule,


    HttpClientModule,
    ReactiveFormsModule,

    CommonModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
