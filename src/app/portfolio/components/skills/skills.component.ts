import { Component, input } from '@angular/core';
import { CodeIcon } from 'lucide-angular';
import { Skill } from '@interfaces/skill.interface';
import { IconPipe } from '@pipes/icon.pipe';
import { IconsModule } from 'app/icons/icons.module';

@Component({
  selector: 'skills',
  standalone: true,
  imports: [IconPipe, IconsModule],
  templateUrl: './skills.component.html',
  styles: [
    `
      :host {
        position: relative;
        display: block;
        overflow: hidden;
      }
    `,
  ],
  host: {
    class:
      'p-4 border border-black/10 rounded-xl shadow-lg group hover:border-primary-500',
  },
})
export class SkillsComponent {
  public header = input.required<string>();
  public skills = input.required<Skill[]>();
  public bgIcon = input<string>();
}
