import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageGaleryComponent } from '@components/image-galery/image-galery.component';
import { TechChipComponent } from '@components/tech-chip/tech-chip.component';
import { Project } from '@interfaces/project.interface';
import { IconsModule } from 'app/icons/icons.module';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [RouterLink, TechChipComponent, IconsModule, ImageGaleryComponent],
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  public project = input.required<Project>();
}
