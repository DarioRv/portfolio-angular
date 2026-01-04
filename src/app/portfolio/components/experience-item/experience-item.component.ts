import { Component, input } from '@angular/core';
import { TechChipComponent } from '@components/tech-chip/tech-chip.component';
import { Experience } from '@interfaces/experience.interface';
import { ImagePipe } from '@pipes/image.pipe';
import { IconsModule } from 'app/icons/icons.module';

@Component({
  selector: 'experience-item',
  standalone: true,
  imports: [ImagePipe, TechChipComponent, IconsModule],
  templateUrl: './experience-item.component.html',
})
export class ExperienceItemComponent {
  public experience = input.required<Experience>();
}
