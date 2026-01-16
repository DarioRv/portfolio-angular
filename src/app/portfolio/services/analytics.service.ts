import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export type AnalyticsParams = Record<string, any>;

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  private get canTrack(): boolean {
    return (
      isPlatformBrowser(this.platformId) &&
      typeof window !== 'undefined' &&
      typeof window.gtag === 'function'
    );
  }

  event(eventName: string, params: AnalyticsParams = {}) {
    if (!this.canTrack) return;
    window.gtag!('event', eventName, params);
  }

  pageView(urlPath: string) {
    if (!this.canTrack) return;
    window.gtag!('event', 'page_view', {
      page_path: urlPath,
      page_location: window.location.href,
      page_title: document.title,
    });
  }
}
