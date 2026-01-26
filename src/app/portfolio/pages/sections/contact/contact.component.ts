import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TrackSectionVisibilityDirective } from '@directives/track-section-visibility.service';
import { IconPipe } from '@pipes/icon.pipe';
import { AnalyticsService } from '@services/analytics.service';
import { IconsModule } from 'app/icons/icons.module';
import { TranslatePipe } from '@ngx-translate/core';
import { CvService } from '@services/cv.service';

@Component({
  selector: 'dv-contact',
  standalone: true,
  imports: [
    IconPipe,
    TrackSectionVisibilityDirective,
    IconsModule,
    TranslatePipe,
  ],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {
  private readonly cvService = inject(CvService);
  private readonly analitycsService = inject(AnalyticsService);

  readonly networks = this.cvService.socialNetworks;

  public trackClick(networkName: string): void {
    this.analitycsService.event('contact_click', {
      network: networkName,
      date: new Date().toISOString(),
    });
  }
}
