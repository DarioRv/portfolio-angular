import { Component, inject } from '@angular/core';
import { ExperienceItemComponent } from '@components/experience-item/experience-item.component';
import { TrackSectionVisibilityDirective } from '@directives/track-section-visibility.service';
import { TranslatePipe } from '@ngx-translate/core';
import { CvService } from '@services/cv.service';

@Component({
  selector: 'dv-experience',
  standalone: true,
  imports: [
    ExperienceItemComponent,
    TrackSectionVisibilityDirective,
    TranslatePipe,
  ],
  templateUrl: './experience.component.html',
  styles: ``,
})
export class ExperienceComponent {
  private readonly cvService = inject(CvService);
  readonly experiences = this.cvService.experience;
}
