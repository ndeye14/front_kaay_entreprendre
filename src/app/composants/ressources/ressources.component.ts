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

  categorie:any = [];
  nom: string = '';
  
  titre: string = '';
  objectif: string = '' ;
  consigne: string = '' ;
  etat: boolean = true ;

  allRessource = true;
  allRessourceInformatique = false;
  allRessourceEntrepreneriat = false;

  tabAllCategoriesInformatiques : any = [];
  tabAllCategoriesEntrepreneriat : any = [];


  constructor ( private ressources : RessourcesService, private router : Router){}


  ngOnInit(): void {
    this.afficher();
    this.addNewRessources();
    // console.log(this.afficherRssources);
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
        console.error('Erreur lors de l\'ajout de Ressource :', error);
      }
    );
    // console.log(newRessources);
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
  
  // modifResource() {
  //   const modificationRessource = this.afficherRssources.find((domaine: any) => domaine.id == this.idDomaineAModifier);
  
  //   if (modificationRessource) {
  //     modificationRessource.nomDomaine = this.nom;
  //     modificationRessource.description = this.descrip;
  //     modificationRessource.image = this.image;
  
  //     console.log("Domaine à modifier");
  //     console.log(modificationRessource);
  //     this.domaineService.edit(this.idDomaineAModifier, { nomDomaine: this.nom, description: this.descrip, image: this.image}).subscribe(
  //       () => {
  //         this.showAlert("Domaine modifié", "", "success");
  //         this.getDomaines(); // Mettre à jour la liste des domaines après modification
  //         this.viderChapms();
  //       },
  //       (error) => {
  //         console.error('Erreur lors de la modification du domaine', error);
  //         this.showAlert("Erreur", "Une erreur s'est produite lors de la modification du domaine", "error");
  //       }
  //     );
  //   } else {
  //     console.error('Domaine non trouvé pour la modification');
  //   }
  // }

// Methode pour afficher les afficher
  afficher() {
    this.ressources.ressourcesData ().subscribe((data) => {
      this.myData = data;
      this.afficherRssources = this.myData;
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
