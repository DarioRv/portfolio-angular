import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Project } from '@interfaces/project.interface';
import cv from '@data/cv.json';
import { SeoService } from '@services/seo.service';
import { IconsModule } from 'app/icons/icons.module';
import { ImageGaleryComponent } from '@components/image-galery/image-galery.component';
import { TechChipComponent } from '@components/tech-chip/tech-chip.component';
import { AnalyticsService } from '@services/analytics.service';
import { TrackSectionVisibilityDirective } from '@directives/track-section-visibility.service';

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
  ],
  templateUrl: './project.component.html',
})
export class ProjectComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);
  private readonly analitycsService = inject(AnalyticsService);

  ngOnInit(): void {
    if (this.project) {
      this.seoService.updateCanonical();
      this.seoService.updateTitle(`${this.project.title} - Darío Vidal`);
      this.seoService.updateDescription(this.project.summary);
    }
  }

  public project: Project | undefined = cv.projects.find(
    (project) => project.key === this.route.snapshot.params['key'],
  );

  public trackOutboundLink(linkType: string): void {
    this.analitycsService.event('outbound_link_click', {
      link_type: linkType,
      project_name: this.project?.title,
    });
  }
}
