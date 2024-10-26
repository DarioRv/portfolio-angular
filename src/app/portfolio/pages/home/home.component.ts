import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '@components/project-card/project-card.component';
import cv from '@data/cv.json';
import { IconPipe } from '@pipes/icon.pipe';
import { ImagePipe } from '@pipes/image.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IconPipe, ImagePipe, ProjectCardComponent, RouterLink, NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public cv = cv;
  public projects = cv.projects.filter((project) => project.featured);
}
