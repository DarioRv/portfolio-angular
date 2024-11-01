import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import { Technology } from '@interfaces/project.interface';
import { IconPipe } from '@pipes/icon.pipe';

@Component({
  selector: 'tech-chip',
  standalone: true,
  imports: [NgStyle, IconPipe],
  templateUrl: './tech-chip.component.html',
  styles: ``,
})
export class TechChipComponent {
  public tech = input.required<Technology>();
}
