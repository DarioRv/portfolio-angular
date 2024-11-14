import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'decoration',
  standalone: true,
  imports: [NgClass],
  templateUrl: './decoration.component.html',
  styles: ``,
})
export class DecorationComponent {
  public color = input('bg-primary-500');
  public rows = input(5, { transform: (value: string | number) => +value });
  public items = computed(() =>
    Array.from({ length: this.rows() }, (_, i) => i)
  );
}
