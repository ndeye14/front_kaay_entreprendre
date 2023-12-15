import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  nomInput = '';
  prenomInput = '';
  emailInput = '';
  telephoneInput = '';
  photoInput = '';
  descriptionInput = '';
  objContact: any;
  idCurrentUser: any;
  db: any;
  currentUser: any;
  contact: any[] = [];

  constructor(private route: Router) {}

  ngOnInit() {
    // récupérer l'utilisateur connecté à partir du localStorage
    this.idCurrentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    console.log('ID Utilisateur Actuel:', this.idCurrentUser);

    // récupérer la base de données à partir du localStorage
    this.db = JSON.parse(localStorage.getItem('users') || '[]');
    console.log('Base de données Utilisateurs:', this.db);

    // récupérer les informations de l'utilisateur connecté
    this.currentUser = this.db.find((element: any) => element.id == this.idCurrentUser);
    console.log('Utilisateur Actuel:', this.currentUser);

    // Initialiser le tableau de contacts du current user
    this.contact = this.currentUser && this.currentUser.contact ? this.currentUser.contact : [];
    console.log('Contacts Actuels:', this.contact);
  }

  addContact() {
    if (!this.currentUser) {
      console.error("Utilisateur non trouvé.");
      return;
    }

    if (this.nomInput.length < 2 || this.prenomInput == "" || this.emailInput == "" || this.telephoneInput == "" || this.photoInput == "" || this.descriptionInput == "") {
      this.showMessage('error', 'Veuillez remplir tout les champs');
    } else {
      // créer l'objet à ajouter dans le tableau contact
      this.objContact = {
        'id': this.contact.length + 1,
        'nom': this.nomInput,
        'prenom': this.prenomInput,
        'email': this.emailInput,
        'telephone': this.telephoneInput,
        'photo': this.photoInput,
        'etat': false,
        'createdAT': new Date().toLocaleDateString(),
        'createdBy': `${this.currentUser.prenom} ${this.currentUser.nom}`,
        'updatedAt': '',
        'updatedBy': '',
        'description': this.descriptionInput
      };

      // ajouter l'objet dans le tableau
      this.contact.push(this.objContact);

      // remplacer le tableau contact du current user dans le local storage par celui du tableau contact où on a ajouté le nouveau contact
      this.currentUser.contact = this.contact;

      // établir le changement dans notre local storage
      localStorage.setItem('users', JSON.stringify(this.db));

      this.showMessage('success', 'Ajout avec succès');
    }
  }

  navigateToContactAdd() {
    this.route.navigate(['/contact-add']);
  }

  showMessage(icon: any, message: any) {
    Swal.fire({
      icon: icon,
      title: message
    });
  }
}
