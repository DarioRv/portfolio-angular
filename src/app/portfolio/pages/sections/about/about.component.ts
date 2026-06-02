import { Component, inject } from '@angular/core';
import { CopyToClipboardComponent } from '@components/copy-to-clipboard/copy-to-clipboard.component';
import { DownloadCvButtonComponent } from '@components/download-cv-button/download-cv-button.component';
import { SkillsComponent } from '@components/skills/skills.component';
import { IconsModule } from 'app/icons/icons.module';
import { IconPipe } from '@pipes/icon.pipe';
import { AnalyticsService } from '@services/analytics.service';
import { TrackSectionVisibilityDirective } from '@directives/track-section-visibility.service';
import { TranslatePipe } from '@ngx-translate/core';
import { CvService } from '@services/cv.service';

@Component({
  selector: 'dv-about',
  standalone: true,
  imports: [
    SkillsComponent,
    CopyToClipboardComponent,
    DownloadCvButtonComponent,
    IconsModule,
    IconPipe,
    TrackSectionVisibilityDirective,
    TranslatePipe,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  private readonly cvService = inject(CvService);
  private readonly analytics = inject(AnalyticsService);

  readonly cv = this.cvService.cv;

  public trackSocialClick(name: string): void {
    this.analytics.event('social_link_click', { social_network: name });
  }
}
