import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from '../composants/projects/projects.component';


@NgModule({
  declarations: [ProjectsComponent,],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class ProjectModule { }
