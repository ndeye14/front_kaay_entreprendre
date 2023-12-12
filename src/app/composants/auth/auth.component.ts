import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import Swal from 'sweetalert2';
import { HeaderConnecteComponent } from '../header-connecte/header-connecte.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  users!: any[];
  email!: string;
  password!: string;
  isUserConnected: boolean = false;

  titleFrm:string="Inscrivez-vous";


  // On fait appel au constructeur
   constructor( private route: Router,private authService:UserService) {}
  ngOnInit(): void {

  }
   // Méthode pour afficher un sweetalert2 apres vérification
  verifierChamps(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }






  loginUser() {
  //  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
  //   // Premiere vérification avec sweetalert
  //   if (this.email == "" ||  this.password == "" ) {
  //     this.verifierChamps("Erreur!", "Vueillez renseigner les champs", "error");
  //   }

  //   else if (!this.email.match(emailPattern)) {
  //     // Vérifie si le format de l'email est correct
  //     this.verifierChamps("Erreur!", "Email invalide", "error");
  //   }
  //   else {
  //     const autth = this.users.find(ele => ele.email == this.email && ele.password ==  this.password)
  //     if (autth) {
  //       this.route.navigate(['home']);
  //       console.log(autth);

  //     } else {
  //       console.log(('pas bon ca'));%
  //     }
    //   }

    this.route.navigate(['accueil']);
  }
  // choix formulaire
showFrmConnexion: boolean=true;

afficherFrmConnexion(){
  this.showFrmConnexion=!this.showFrmConnexion;

  // OpÃ©ration ternaire qui prend la premiere valeur aprÃ¨s le ? si la condition est vrai
  // ou la deuxiÃ¨me aprÃ¨s les : si la condition est fausse
   this.showFrmConnexion == false ?  this.titleFrm="Connectez-Vous" :  this.titleFrm="Inscrivez-Vous";
}



}



