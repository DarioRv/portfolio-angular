import { NgClass, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { TechChipComponent } from '@components/tech-chip/tech-chip.component';
import { Project } from '@interfaces/project.interface';
import { IconPipe } from '@pipes/icon.pipe';
import { ImagePipe } from '@pipes/image.pipe';
import cv from '@data/cv.json';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'project',
  standalone: true,
  imports: [
    ImagePipe,
    IconPipe,
    TechChipComponent,
    RouterLink,
    NgStyle,
    NgClass,
    MatIconModule,
  ],
  templateUrl: './project.component.html',
  styles: ``,
})
export class ProjectComponent {
  private readonly route = inject(ActivatedRoute);
  public project: Project | undefined = cv.projects.find(
    (project) => project.key === this.route.snapshot.params['key']
  );

  public selectedImage: string = this.project?.images[0] || '';

  public selectImage(image: string): void {
    this.selectedImage = image;
  }
}
