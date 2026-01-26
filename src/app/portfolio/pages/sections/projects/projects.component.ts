import { Component, inject } from '@angular/core';
import { ProjectCardComponent } from '@components/project-card/project-card.component';
import { TrackSectionVisibilityDirective } from '@directives/track-section-visibility.service';
import { TranslatePipe } from '@ngx-translate/core';
import { CvService } from '@services/cv.service';

@Component({
  selector: 'dv-projects',
  standalone: true,
  imports: [
    ProjectCardComponent,
    TrackSectionVisibilityDirective,
    TranslatePipe,
  ],
  templateUrl: './projects.component.html',
  styles: ``,
})
export class ProjectsComponent {
  private readonly cvService = inject(CvService);

  readonly projects = this.cvService.projects;
}
