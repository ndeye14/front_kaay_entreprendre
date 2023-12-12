import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from '../composants/projects/projects.component';
import { ProjectService } from '../services/project.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
     FormsModule,
     NgbModule
  ],
  providers: [ProjectService],
})
export class ProjectsModule { }
