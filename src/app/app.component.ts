import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SectionTimeTrackerService } from '@services/section-time-tracker.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class AppComponent {
  constructor(
    tracker: SectionTimeTrackerService,
    router: Router,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    if (!isPlatformBrowser(platformId)) return;

    tracker.initGlobalGuards();

    router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        // si cambiás de ruta, mandá lo acumulado
        tracker.flush('route_change');
      });
  }
}
