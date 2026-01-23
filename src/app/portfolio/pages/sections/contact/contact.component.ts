import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import cv from '@data/cv.json';
import { TrackSectionVisibilityDirective } from '@directives/track-section-visibility.service';
import { IconPipe } from '@pipes/icon.pipe';
import { AnalyticsService } from '@services/analytics.service';
import { IconsModule } from 'app/icons/icons.module';

@Component({
  selector: 'dv-contact',
  standalone: true,
  imports: [IconPipe, TrackSectionVisibilityDirective, IconsModule],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {
  public networks = cv.socialNetworks;
  private readonly analitycsService = inject(AnalyticsService);

  public trackClick(networkName: string): void {
    this.analitycsService.event('contact_click', {
      network: networkName,
      date: new Date().toISOString(),
    });
  }
}
