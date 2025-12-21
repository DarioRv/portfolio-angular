import { Component, input } from '@angular/core';
import { Skill } from '@interfaces/skill.interface';
import { IconPipe } from '@pipes/icon.pipe';

@Component({
  selector: 'skills',
  standalone: true,
  imports: [IconPipe],
  templateUrl: './skills.component.html',
  styles: ``,
  host: {
    class: 'p-4 mt-5 border border-white/20 rounded-xl',
  },
})
export class SkillsComponent {
  public header = input.required<string>();
  public skills = input.required<Skill[]>();
}
