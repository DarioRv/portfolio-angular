import { Component, inject } from '@angular/core';
import { AnalyticsService } from '@services/analytics.service';
import { IconsModule } from 'app/icons/icons.module';
import { TranslatePipe } from '@ngx-translate/core';
import { CvService } from '@services/cv.service';

@Component({
  selector: 'download-cv-button',
  standalone: true,
  imports: [IconsModule, TranslatePipe],
  templateUrl: './download-cv-button.component.html',
  styles: ``,
})
export class DownloadCvButtonComponent {
  private readonly cvService = inject(CvService);
  private readonly analyticsService = inject(AnalyticsService);

  readonly url = this.cvService.cvFileUrl;

  onDownloadClick() {
    this.analyticsService.event('click_download_cv', {
      date: new Date().toISOString(),
    });
  }
}
