import { Component, inject } from '@angular/core';
import { CopyToClipboardComponent } from '@components/copy-to-clipboard/copy-to-clipboard.component';
import { DownloadCvButtonComponent } from '@components/download-cv-button/download-cv-button.component';
import { SkillsComponent } from '@components/skills/skills.component';
import { IconsModule } from 'app/icons/icons.module';
import cv from '@data/cv.json';
import { IconPipe } from '@pipes/icon.pipe';
import { AnalyticsService } from '@services/analytics.service';

@Component({
  selector: 'dv-about',
  standalone: true,
  imports: [
    SkillsComponent,
    CopyToClipboardComponent,
    DownloadCvButtonComponent,
    IconsModule,
    IconPipe,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  public cv = cv;
  private readonly analytics = inject(AnalyticsService);

  public trackSocialClick(name: string): void {
    this.analytics.event('social_link_click', { social_network: name });
  }
}
