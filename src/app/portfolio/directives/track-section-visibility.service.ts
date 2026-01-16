import {
  Directive,
  ElementRef,
  Input,
  Inject,
  PLATFORM_ID,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SectionTimeTrackerService } from '@services/section-time-tracker.service';

@Directive({
  selector: '[trackSection]',
  standalone: true,
})
export class TrackSectionVisibilityDirective implements OnInit, OnDestroy {
  @Input('trackSection') sectionId!: string;

  private io?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private readonly tracker: SectionTimeTrackerService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    // threshold: consideramos “activa” si al menos 60% visible
    this.io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const isVisible =
            entry.isIntersecting && entry.intersectionRatio >= 0.6;

          if (isVisible) this.tracker.setActive(this.sectionId);
          else this.tracker.clearIfActive(this.sectionId);
        }
      },
      {
        threshold: [0, 0.25, 0.6, 0.75, 1],
        rootMargin: '0px 0px -20% 0px', // ayuda a evitar “flicker” al borde inferior
      },
    );

    this.io.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.io?.disconnect();
  }
}
