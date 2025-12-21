import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '@components/project-card/project-card.component';
import cv from '@data/cv.json';
import { IconPipe } from '@pipes/icon.pipe';
import { SkillsComponent } from '../../components/skills/skills.component';
import { MatIconModule } from '@angular/material/icon';
import { DecorationComponent } from '../../components/decoration/decoration.component';
import { CopyToClipboardComponent } from '@components/copy-to-clipboard/copy-to-clipboard.component';
import { DownloadCvButtonComponent } from '../../components/download-cv-button/download-cv-button.component';
import { SeoService } from '@services/seo.service';
import { IconsModule } from 'app/icons/icons.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IconPipe,
    ProjectCardComponent,
    RouterLink,
    SkillsComponent,
    MatIconModule,
    CopyToClipboardComponent,
    DownloadCvButtonComponent,
    IconsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public cv = cv;
  public projects = cv.projects.filter((project) => project.featured);
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateTitle('Darío Vidal - Desarrollador Web Full Stack');
    this.seoService.updateDescription(
      'Desarrollador con +1 año de experiencia en tecnologías como Angular, NestJS, Spring, Node.js, MongoDB, MySQL, entre otras.',
    );
    this.seoService.updateCanonical();
  }
}
