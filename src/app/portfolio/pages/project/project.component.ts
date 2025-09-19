import { NgClass, NgStyle } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { TechChipComponent } from '@components/tech-chip/tech-chip.component';
import { Project } from '@interfaces/project.interface';
import { ImagePipe } from '@pipes/image.pipe';
import cv from '@data/cv.json';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from '@services/seo.service';

@Component({
  selector: 'project',
  standalone: true,
  imports: [ImagePipe, TechChipComponent, NgStyle, NgClass, MatIconModule],
  templateUrl: './project.component.html',
  styles: ``,
})
export class ProjectComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    if (this.project) {
      this.seoService.updateCanonical();
      this.seoService.updateTitle(`${this.project.title} - Darío Vidal`);
      this.seoService.updateDescription(this.project.summary);
    }
  }

  public project: Project | undefined = cv.projects.find(
    (project) => project.key === this.route.snapshot.params['key'],
  );

  public selectedImage: string = this.project?.images[0] || '';

  public selectImage(image: string): void {
    this.selectedImage = image;
  }
}
