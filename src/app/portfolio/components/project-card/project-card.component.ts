import { NgClass, NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '@interfaces/project.interface';
import { IconPipe } from '@pipes/icon.pipe';
import { ImagePipe } from '@pipes/image.pipe';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [ImagePipe, IconPipe, NgStyle, NgClass, RouterLink],
  templateUrl: './project-card.component.html',
  styles: ``,
  host: {
    class: 'mb-10 md:mb-0',
  },
})
export class ProjectCardComponent {
  public project = input.required<Project>();
}
