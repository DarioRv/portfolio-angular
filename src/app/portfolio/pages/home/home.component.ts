import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '@services/seo.service';
import { IconsModule } from 'app/icons/icons.module';
import { ExperienceComponent } from '@pages/sections/experience/experience.component';
import { ProjectsComponent } from '@pages/sections/projects/projects.component';
import { EducationComponent } from '@pages/sections/education/education.component';
import { ContactComponent } from '@pages/sections/contact/contact.component';
import { AboutComponent } from '@pages/sections/about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IconsModule,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    AboutComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateTitle('Darío Vidal - Desarrollador Web Full Stack');
    this.seoService.updateDescription(
      'Desarrollador con +1 año de experiencia en tecnologías como Angular, NestJS, Spring, Node.js, MongoDB, MySQL, entre otras.',
    );
    this.seoService.updateCanonical();
  }
}
