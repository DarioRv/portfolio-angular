import { Component } from '@angular/core';
import { ProjectCardComponent } from '@components/project-card/project-card.component';
import cv from '@data/cv.json';
import { TrackSectionVisibilityDirective } from '@directives/track-section-visibility.service';
import { Project } from '@interfaces/project.interface';
import { IconsModule } from 'app/icons/icons.module';

@Component({
  selector: 'dv-projects',
  standalone: true,
  imports: [ProjectCardComponent, TrackSectionVisibilityDirective, IconsModule],
  templateUrl: './projects.component.html',
  styles: ``,
})
export class ProjectsComponent {
  public projects: Project[] = cv.projects;

  filterByTech(tech: string): void {
    if (tech === 'all') {
      this.projects = cv.projects;
      return;
    }

    this.projects = this.projects.filter((project) =>
      project.technologies.some(
        (technology) => technology.label.toLowerCase() === tech.toLowerCase(),
      ),
    );
  }
}
