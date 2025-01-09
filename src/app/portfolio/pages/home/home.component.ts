import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '@components/project-card/project-card.component';
import cv from '@data/cv.json';
import { IconPipe } from '@pipes/icon.pipe';
import { SkillsComponent } from '../../components/skills/skills.component';
import { MatIconModule } from '@angular/material/icon';
import { DecorationComponent } from '../../components/decoration/decoration.component';
import { CopyToClipboardComponent } from '@components/copy-to-clipboard/copy-to-clipboard.component';
import { DownloadCvButtonComponent } from '../../components/download-cv-button/download-cv-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IconPipe,
    ProjectCardComponent,
    RouterLink,
    SkillsComponent,
    MatIconModule,
    DecorationComponent,
    CopyToClipboardComponent,
    DownloadCvButtonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public cv = cv;
  public projects = cv.projects.filter((project) => project.featured);
}
