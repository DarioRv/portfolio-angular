import { Component, inject, OnInit } from '@angular/core';
import { DecorationComponent } from '@components/decoration/decoration.component';
import { ProjectCardComponent } from '@components/project-card/project-card.component';
import cv from '@data/cv.json';
import { Project } from '@interfaces/project.interface';
import { SeoService } from '@services/seo.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, DecorationComponent],
  templateUrl: './projects.component.html',
  styles: ``,
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] = cv.projects;
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateCanonical();
  }
}
