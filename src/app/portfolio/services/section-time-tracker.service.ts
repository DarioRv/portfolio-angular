import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnalyticsService } from './analytics.service';

type SectionId = string;

@Injectable({ providedIn: 'root' })
export class SectionTimeTrackerService {
  private activeSection: SectionId | null = null;
  private activeSince = 0;

  private totalsMs = new Map<SectionId, number>();

  constructor(
    private analytics: AnalyticsService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  initGlobalGuards() {
    if (!isPlatformBrowser(this.platformId)) return;

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') this.pauseAndAccumulate();
      else this.resume();
    });

    window.addEventListener('pagehide', () => this.flush('pagehide'));
    window.addEventListener('beforeunload', () => this.flush('beforeunload'));
  }

  /** Llamado por la directiva cuando una sección pasa a ser “la activa” */
  setActive(sectionId: SectionId) {
    if (!isPlatformBrowser(this.platformId)) return;

    if (this.activeSection === sectionId) return;

    // acumula tiempo de la sección anterior
    this.pauseAndAccumulate();

    // activa nueva sección
    this.activeSection = sectionId;
    this.activeSince = Date.now();
  }

  /** Si una sección sale de vista y era la activa, pausá */
  clearIfActive(sectionId: SectionId) {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.activeSection !== sectionId) return;

    this.pauseAndAccumulate();
    this.activeSection = null;
  }

  /** Flush manual (por ejemplo al cambiar de ruta) */
  flush(reason: string) {
    if (!isPlatformBrowser(this.platformId)) return;

    this.pauseAndAccumulate();

    // Enviar eventos por cada sección con tiempo > umbral
    for (const [sectionId, ms] of this.totalsMs.entries()) {
      if (ms < 1000) continue; // umbral anti-ruido

      this.analytics.event('section_view_time', {
        section_id: sectionId,
        duration_ms: ms,
        duration_s: Math.round(ms / 1000),
        reason,
      });
    }

    // reset
    this.totalsMs.clear();
  }

  private pauseAndAccumulate() {
    if (!this.activeSection || !this.activeSince) return;

    const now = Date.now();
    const delta = now - this.activeSince;

    const prev = this.totalsMs.get(this.activeSection) ?? 0;
    this.totalsMs.set(this.activeSection, prev + Math.max(0, delta));

    this.activeSince = 0; // pausado
  }

  private resume() {
    if (!this.activeSection) return;
    this.activeSince = Date.now();
  }
}
