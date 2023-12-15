import { Component } from '@angular/core';
import { PartageExperience } from '../models/PartageExperience.model';
import { PartageExperienceService } from 'src/app/services/partage.service';

@Component({
  selector: 'app-partage-experience',
  templateUrl: './partage-experience.component.html',
  styleUrls: ['./partage-experience.component.css']
})
export class PartageExperienceComponent {

  contenu: string = '';
  titre: string = '';

 // constructor(private partageService: PartageExperienceService) {}

  addPartage() {
    const partageExperience = new PartageExperience();
    partageExperience.contenu = this.contenu;
    partageExperience.titre = this.titre;

   // this.partageService.postPartageExperience(partageExperience).subscribe(() => {
      // Traitement après la soumission réussie, si nécessaire
  //  });
  }
}
