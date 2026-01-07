import { isPlatformBrowser, NgClass } from '@angular/common';
import {
  Component,
  inject,
  input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { ImagePipe } from '@pipes/image.pipe';
import { imageFade } from 'app/portfolio/shared/utils/animations';

@Component({
  selector: 'dv-image-galery',
  standalone: true,
  imports: [ImagePipe, NgClass],
  templateUrl: './image-galery.component.html',
  styleUrl: './image-galery.component.css',
  animations: [imageFade],
})
export class ImageGaleryComponent implements OnInit, OnDestroy {
  public images = input.required<string[]>();
  public design = input<'default' | 'simple'>('default');
  public selectedImage: string = '';
  public progress = 0;

  private autoplay = true;
  private intervalMs = 10000;
  private tickMs = 50; // suavidad de la barra
  private timerId: number | null = null;
  private progressId: number | null = null;
  private readonly platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.selectedImage = this.images()[0];
    if (isPlatformBrowser(this.platform)) {
      this.startAutoplay();
    }
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  public selectImage(image: string): void {
    this.selectedImage = image;
    this.restartAutoplay();
  }

  pause() {
    this.autoplay = false;
    this.stopAutoplay(false); // no resetea progress
  }

  resume() {
    this.autoplay = true;
    this.startAutoplay(true); // continúa
  }

  private startAutoplay(keepProgress = false) {
    if (!this.images()?.length || this.images().length <= 1) return;
    this.stopAutoplay(!keepProgress);

    // progreso
    if (!keepProgress) this.progress = 0;

    this.progressId = window.setInterval(() => {
      // suma proporcional para llegar a 100 justo en intervalMs
      const step = (100 * this.tickMs) / this.intervalMs;
      this.progress = Math.min(100, this.progress + step);
    }, this.tickMs);

    // cambio de imagen
    this.timerId = window.setInterval(() => {
      this.nextImage();
      this.progress = 0;
    }, this.intervalMs);
  }

  private stopAutoplay(resetProgress = true) {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    if (this.progressId) {
      clearInterval(this.progressId);
      this.progressId = null;
    }
    if (resetProgress) this.progress = 0;
  }

  private restartAutoplay() {
    if (!this.autoplay) return;
    this.startAutoplay(false);
  }

  private nextImage() {
    const imgs = this.images();
    const idx = imgs.indexOf(this.selectedImage);
    const next = idx >= 0 ? (idx + 1) % imgs.length : 0;
    this.selectedImage = imgs[next];
  }
}
