import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RessourcesService } from '../services/ressources.service';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ressources } from '../services/ressources.model';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css']
})
export class RessourcesComponent implements OnInit {

  nomRessources: any;
  afficherRssources: any[] = [];
  myData: any;

  titre: string ='';
  objectif: string ='';
  consigne: string = '';
  etat: boolean = false ;


  constructor ( private ressources : RessourcesService, private router : Router){}


  ngOnInit(): void {
    this.afficher();
    console.log(this.afficherRssources);
  }



  addNewRessources() {
    const newRessources = {
      titre: this.titre,
      objectif: this.objectif,
      consigne: this.consigne,
      etat: this.etat,
    };
    this.ressources.addRessources(newRessources).subscribe(
      (response) => {
        console.log('Ressources ajouté avec succès :', response);
        // Réinitialiser les données pour ajouter un nouvel Ressources
        // newRessources = response;
        // newRessources.push(newRessources);
        this.affichermessage('success','Ressources Ajouté','')
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'Ressources :', error);
      }
    );
    console.log(newRessources);
  }


  afficher() {
    this.ressources.ressourcesData().subscribe((data) => {
      this.myData = data;
      this.afficherRssources = this.myData
      console.log(this.afficherRssources);
      
    });
  }
  // afficher() {
  //   this.userService.userData().subscribe((data) => {
  //     this.myData = data;
  //     this.filteredUser = this.myData
  //   });
  // }


  affichermessage(icone: any, message: string,user:string) {
    Swal.fire({
        position: 'center',
        icon: icone,
        title: message +"" +user,
        showConfirmButton: true,
    })
  }


}
