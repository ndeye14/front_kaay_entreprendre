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

  allRessource = true;
  allRessourceInformatique = false;
  allRessourceEntrepreneriat = false;

  tabAllCategoriesInformatiques : any = [];
  tabAllCategoriesEntrepreneriat : any = [];


  constructor ( private ressources : RessourcesService, private router : Router){}


  ngOnInit(): void {
    this.afficher();
    this.addNewRessources();
    console.log(this.afficherRssources);
  }


//Methode pour ajouter une catégorie
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
        this.affichermessage('success','Ressource Ajoutée','')
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'Ressource :', error);
      }
    );
    console.log(newRessources);
  }

  // exemple
  options = ['Option 1', 'Option 2', 'Option 3'];
  optionSelectionnee: string = '';

  submit() {
    console.log('Option sélectionnée :', this.optionSelectionnee);
    // Ajoutez ici le traitement de l'option sélectionnée
  }

  // Methode pour modifier un id spécifique
  // variables
  modificationRessource:any ={
    titre: this.titre,
    objectif: this.objectif,
    consigne: this.consigne,
    etat: this.etat,
  }

  modifResource(id:number){
    this.ressources.modifierRessources(id, this.modificationRessource).subscribe(
      (response) => {
        console.log('Mise à jour réussie :', response);
        this.affichermessage('success','Ressource Modifiée','')
      },
      (error) => {
        console.error('Erreur lors de la mise à jour :', error);
      }
    );
  } 

// Methode pour afficher les afficher
  afficher() {
    this.ressources.ressourcesData().subscribe((data) => {
      this.myData = data;
      this.afficherRssources = this.myData
      console.log(this.afficherRssources);

      
      
    });
  }


  affichermessage(icone: any, message: string,user:string) {
    Swal.fire({
        position: 'center',
        icon: icone,
        title: message +"" +user,
        showConfirmButton: true,
    })
  }


  getAllCategoriesInformatique()
  {
    
    this.allRessource = false;
    this.allRessourceInformatique =true;
    this.allRessourceEntrepreneriat = false;


  }

  getAllCategoriesEntrepreneria()
  {
    this.allRessource = false;
    this.allRessourceInformatique =false;
    this.allRessourceEntrepreneriat = true;
  }

}
