import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private storageKey = 'projects';

  getProjects(): any[] {
    const projectsString = localStorage.getItem(this.storageKey);
    return projectsString ? JSON.parse(projectsString) : [];
  }

  createProject(newProject: any) {
    const projects = this.getProjects();
    newProject.id = Date.now();
    projects.push(newProject);
    localStorage.setItem(this.storageKey, JSON.stringify(projects));
  }

  updateProject(updatedProject: any) {
    const projects = this.getProjects();
    const index = projects.findIndex((p) => p.id === updatedProject.id);
    if (index !== -1) {
      projects[index] = updatedProject;
      localStorage.setItem(this.storageKey, JSON.stringify(projects));
    }
  }

  deleteProject(projectId: number) {
    const projects = this.getProjects();
    const updatedProjects = projects.filter((p) => p.id !== projectId);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedProjects));
  }
}
