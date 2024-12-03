import { NgClass, NgStyle } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { TechChipComponent } from '@components/tech-chip/tech-chip.component';
import { Project } from '@interfaces/project.interface';
import { ImagePipe } from '@pipes/image.pipe';
import cv from '@data/cv.json';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'project',
  standalone: true,
  imports: [ImagePipe, TechChipComponent, NgStyle, NgClass, MatIconModule],
  templateUrl: './project.component.html',
  styles: ``,
})
export class ProjectComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit(): void {
    this.setTitleAndMeta();
  }

  public project: Project | undefined = cv.projects.find(
    (project) => project.key === this.route.snapshot.params['key']
  );

  public selectedImage: string = this.project?.images[0] || '';

  public selectImage(image: string): void {
    this.selectedImage = image;
  }

  private setTitleAndMeta(): void {
    if (this.project) {
      this.title.setTitle(`Darío Vidal - Proyecto ${this.project?.title}`);
      this.meta.updateTag({
        name: 'description',
        content: this.project.summary,
      });
    }
  }
}
