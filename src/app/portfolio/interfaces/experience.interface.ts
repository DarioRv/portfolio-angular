import { Technology } from './project.interface';

export interface Experience {
  title: string;
  company: string;
  companyLogo: string;
  companyUrl?: string;
  period: string;
  type: string;
  location: string;
  current: boolean;
  description: string[];
  achievements: string[];
  technologies: Technology[];
}
