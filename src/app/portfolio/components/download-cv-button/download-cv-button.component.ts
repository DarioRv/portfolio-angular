import { Component, inject } from '@angular/core';
import { AnalyticsService } from '@services/analytics.service';
import { IconsModule } from 'app/icons/icons.module';
import cv from '@data/cv.json';

@Component({
  selector: 'download-cv-button',
  standalone: true,
  imports: [IconsModule],
  templateUrl: './download-cv-button.component.html',
  styles: ``,
})
export class DownloadCvButtonComponent {
  url = cv.cvFileUrl;
  private readonly analyticsService = inject(AnalyticsService);

  onDownloadClick() {
    this.analyticsService.event('click_download_cv', {
      date: new Date().toISOString(),
    });
  }
}
