import { Routes } from '@angular/router';
import { LayoutComponent } from './portfolio/layouts/layout/layout.component';
import { HomeComponent } from '@pages/home/home.component';
import { ProjectsComponent } from '@pages/projects/projects.component';
import { EducationComponent } from '@pages/education/education.component';
import { ContactComponent } from '@pages/contact/contact.component';
import { ProjectComponent } from '@pages/project/project.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        title: 'Darío Vidal - Desarrollador Web Full Stack',
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Darío Vidal - Proyectos',
        pathMatch: 'full',
      },
      {
        path: 'projects/:key',
        component: ProjectComponent,
        title: 'Darío Vidal - Proyecto',
      },
      {
        path: 'education',
        component: EducationComponent,
        title: 'Darío Vidal - Educación',
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'Darío Vidal - Contacto',
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];
