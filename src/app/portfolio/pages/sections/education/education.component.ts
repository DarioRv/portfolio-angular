import { Component, inject, computed, signal } from '@angular/core';
import { EducationCardComponent } from '../../../components/education-card/education-card.component';
import { CertificationCardComponent } from '@components/certification-card/certification-card.component';
import { IconsModule } from 'app/icons/icons.module';
import { expandListAnim } from 'app/portfolio/shared/utils/animations';
import { TrackSectionVisibilityDirective } from '@directives/track-section-visibility.service';
import { TranslatePipe } from '@ngx-translate/core';
import { CvService } from '@services/cv.service';

@Component({
  selector: 'dv-education',
  standalone: true,
  imports: [
    EducationCardComponent,
    CertificationCardComponent,
    IconsModule,
    TrackSectionVisibilityDirective,
    TranslatePipe,
  ],
  templateUrl: './education.component.html',
  animations: [expandListAnim],
})
export class EducationComponent {
  private readonly cvService = inject(CvService);

  readonly education = this.cvService.education;
  readonly certifications = this.cvService.certifications;

  private visibleCount = signal(2);

  readonly visibleCertifications = computed(() =>
    this.certifications().slice(0, this.visibleCount()),
  );

  readonly hasMore = computed(
    () => this.visibleCount() < this.certifications().length,
  );

  showMore() {
    this.visibleCount.set(this.certifications().length);
  }

  showLess() {
    this.visibleCount.set(2);
  }
}
