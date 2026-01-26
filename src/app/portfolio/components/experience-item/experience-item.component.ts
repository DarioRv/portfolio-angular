import { Component, input } from '@angular/core';
import { TechChipComponent } from '@components/tech-chip/tech-chip.component';
import { Experience } from '@interfaces/experience.interface';
import { IconsModule } from 'app/icons/icons.module';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'experience-item',
  standalone: true,
  imports: [TechChipComponent, IconsModule, TranslatePipe],
  templateUrl: './experience-item.component.html',
})
export class ExperienceItemComponent {
  public experience = input.required<Experience>();
}
