import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TechChipComponent } from '@components/tech-chip/tech-chip.component';
import { Project } from '@interfaces/project.interface';
import { ImagePipe } from '@pipes/image.pipe';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [ImagePipe, RouterLink, TechChipComponent, NgStyle],
  templateUrl: './project-card.component.html',
  styles: ``,
  host: {
    class: 'mb-10 md:mb-0',
  },
})
export class ProjectCardComponent {
  public project = input.required<Project>();
}
