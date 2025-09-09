import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TechChipComponent } from '@components/tech-chip/tech-chip.component';
import { Experience } from '@interfaces/experience.interface';
import { ImagePipe } from '@pipes/image.pipe';

@Component({
  selector: 'experience-item',
  standalone: true,
  imports: [ImagePipe, MatIcon, TechChipComponent],
  templateUrl: './experience-item.component.html',
  styles: `
    .mat-icon {
      width: fit-content;
      height: fit-content;
    }
  `,
})
export class ExperienceItemComponent {
  public experience = input.required<Experience>();
}
