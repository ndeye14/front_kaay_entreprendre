import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  newProject: any = {};

  constructor(private modalService: NgbModal, private projectService: ProjectService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projects = this.projectService.getProjects();
  }

  openCreateModal(content: any) {
    this.newProject = {};
    this.modalService.open(content, { centered: true });
  }

  createProject() {
    if (this.newProject.title && this.newProject.description) {
      this.newProject.id = Date.now();
      this.projectService.createProject(this.newProject);
      this.loadProjects(); // Rechargez la liste des projets après la création
      this.modalService.dismissAll(); // Fermez le modal après la création
    }
  }

  deleteProject(projectId: number) {
    this.projectService.deleteProject(projectId);
    this.loadProjects(); // Rechargez la liste des projets après la suppression
  }
}
