import { Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { DecorationComponent } from '@components/decoration/decoration.component';
import { ProjectCardComponent } from '@components/project-card/project-card.component';
import cv from '@data/cv.json';
import { Project } from '@interfaces/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, DecorationComponent],
  templateUrl: './projects.component.html',
  styles: ``,
})
export class ProjectsComponent implements OnInit {
  private readonly meta = inject(Meta);
  public projects: Project[] = cv.projects;

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Visita algunos de los proyectos que he realizado en mi carrera profesional, desarrollados con tecnologías como Angular, Spring Boot, Node.js, MySQL y más.',
    });
  }
}
