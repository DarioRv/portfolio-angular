import { Component, inject, OnInit, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { SeoService } from '@services/seo.service';
import { IconsModule } from 'app/icons/icons.module';
import { ImageGaleryComponent } from '@components/image-galery/image-galery.component';
import { TechChipComponent } from '@components/tech-chip/tech-chip.component';
import { AnalyticsService } from '@services/analytics.service';
import { TrackSectionVisibilityDirective } from '@directives/track-section-visibility.service';
import { TranslatePipe } from '@ngx-translate/core';
import { CvService } from '@services/cv.service';

@Component({
  selector: 'project',
  standalone: true,
  imports: [
    IconsModule,
    ImageGaleryComponent,
    RouterLink,
    TechChipComponent,
    TrackSectionVisibilityDirective,
    IconsModule,
    TranslatePipe,
  ],
  templateUrl: './project.component.html',
})
export class ProjectComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);
  private readonly analitycsService = inject(AnalyticsService);
  private readonly cvService = inject(CvService);

  readonly project = computed(() => {
    const key = this.route.snapshot.params['key'];
    return this.cvService.projects().find((p) => p.key === key);
  });

  readonly overviewSections = computed(() => {
    const sections = this.project()?.overview?.sections ?? [];

    return [...sections].sort(
      (left, right) =>
        (left.order ?? Number.MAX_SAFE_INTEGER) -
        (right.order ?? Number.MAX_SAFE_INTEGER),
    );
  });

  ngOnInit(): void {
    const proj = this.project();
    if (proj) {
      this.seoService.updateCanonical(`/projects/${proj.key}/`);
      this.seoService.updateTitle(`${proj.title} - Darío Vidal`);
      this.seoService.updateDescription(proj.summary);
      this.seoService.updateOgUrl(`/projects/${proj.key}/`);
      this.seoService.updateOgImage(
        '/images/projects/project-image-default.webp',
      );
    }
  }

  isStringArray(value: string | string[]): value is string[] {
    return Array.isArray(value);
  }

  public trackOutboundLink(linkType: string): void {
    this.analitycsService.event('outbound_link_click', {
      link_type: linkType,
      project_name: this.project()?.title,
    });
  }
}
