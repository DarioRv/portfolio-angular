import { DOCUMENT } from '@angular/common';
import {
  Component,
  inject,
  input,
  OnDestroy,
  OnInit,
  output,
} from '@angular/core';
import { ImagePipe } from '@pipes/image.pipe';
import { IconsModule } from 'app/icons/icons.module';

@Component({
  selector: 'dv-image-galery-full-screen',
  standalone: true,
  imports: [ImagePipe, IconsModule],
  templateUrl: './image-galery-full-screen.component.html',
  host: {
    '(document:keydown.escape)': 'close()',
  },
})
export class ImageGaleryFullScreenComponent implements OnInit, OnDestroy {
  public images = input.required<string[]>();
  public currentIndex = 0;
  public closed = output<void>();

  private readonly document = inject(DOCUMENT);

  ngOnInit(): void {
    this.document.body.style.overflow = 'hidden';
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = '';
  }

  get currentImage(): string {
    return this.images()[this.currentIndex];
  }

  public close(): void {
    this.closed.emit();
  }

  public next(): void {
    const imgs = this.images();
    this.currentIndex = (this.currentIndex + 1) % imgs.length;
  }

  public prev(): void {
    const imgs = this.images();
    this.currentIndex = (this.currentIndex - 1 + imgs.length) % imgs.length;
  }

  public goTo(index: number): void {
    this.currentIndex = index;
  }
}
