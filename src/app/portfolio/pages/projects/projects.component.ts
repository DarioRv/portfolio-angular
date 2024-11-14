import { Component } from '@angular/core';
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
export class ProjectsComponent {
  public projects: Project[] = cv.projects;
}
