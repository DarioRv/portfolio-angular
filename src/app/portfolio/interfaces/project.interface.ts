export interface Project {
  title: string;
  key: string;
  summary: string;
  description: string[];
  featured?: boolean;
  image: string;
  technologies: Technology[];
  github?: string;
  demo?: string;
}

export interface Technology {
  label: string;
  icon: string;
  color: string;
  backgroundColor: string;
}
