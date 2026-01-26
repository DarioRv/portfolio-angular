import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageGaleryComponent } from '@components/image-galery/image-galery.component';
import { TechChipComponent } from '@components/tech-chip/tech-chip.component';
import { Project } from '@interfaces/project.interface';
import { AnalyticsService } from '@services/analytics.service';
import { IconsModule } from 'app/icons/icons.module';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [
    RouterLink,
    TechChipComponent,
    IconsModule,
    ImageGaleryComponent,
    TranslatePipe,
  ],
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  public project = input.required<Project>();
  private readonly analyticsService = inject(AnalyticsService);

  public trackProjectCardInteraction(
    projectName: string,
    action: string,
  ): void {
    this.analyticsService.event('project_card_interaction', {
      project_name: projectName,
      action: action,
    });
  }
}
