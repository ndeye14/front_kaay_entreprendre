import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './composants/header/header.component';
import { AuthComponent } from './composants/auth/auth.component';
import { ForumComponent } from './composants/forum/forum.component';
import { ConditionsGeneralesComponent } from './composants/conditions-generales/conditions-generales.component';
import { PolitiquesConfidentialitesComponent } from './composants/politiques-confidentialites/politiques-confidentialites.component';
import { HeaderConnecteComponent } from './composants/header-connecte/header-connecte.component';
import { DomainesComponent } from './composants/domaines/domaines.component';
import { DashComponent } from './composants/dash/dash.component';
import { GuidesComponent } from './composants/guides/guides.component';
import { MenuComponent } from './composants/menu/menu.component';
import { SettingProfilComponent } from './composants/setting-profil/setting-profil.component';
import { ProfilComponent } from './composants/profil/profil.component';
import { PageaccueilComponent } from './composants/pageaccueil/pageaccueil.component';
import { AproposComponent } from './composants/apropos/apropos.component';
import { ProjetsComponent } from './composants/projets/projets.component';
import { RessourcesComponent } from './composants/ressources/ressources.component';


const routes: Routes = [
   {path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'login', component: AuthComponent },
   { path: 'home', component: HeaderComponent },
   { path: 'accueil', component: HeaderConnecteComponent },
  { path: 'politiqueConfidenialite', component: PolitiquesConfidentialitesComponent },
  { path: 'conditionUtilisation', component: ConditionsGeneralesComponent },
  { path: 'pageacceuil', component: PageaccueilComponent },
  { path: 'apropos', component: AproposComponent },
  { path:'projets', component: ProjetsComponent },
  {path: 'ressources', component: RessourcesComponent },

  { path: 'forum', component: ForumComponent },



  { path: 'dash', component : DashComponent},
  { path: 'guides', component: GuidesComponent},
  { path: 'domaines', component: DomainesComponent },
  { path: 'profil', component: ProfilComponent},
  { path: 'setting',component:SettingProfilComponent},
  { path: 'menu',component:MenuComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
