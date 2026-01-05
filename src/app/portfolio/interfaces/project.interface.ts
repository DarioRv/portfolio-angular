export interface Project {
  title: string;
  key: string;
  summary: string;
  description: string[];
  featured?: boolean;
  images: string[];
  technologies: Technology[];
  github?: string;
  demo?: string;
  overview?: OverviewDetails;
  features?: Feature[];
  architecture?: Architecture;
  stats?: Stats[];
}

export interface Technology {
  label: string;
  icon: string;
  color?: string;
  backgroundColor?: string;
}

export interface OverviewDetails {
  context: string;
  problem: string[];
  solution: string;
  results: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface Architecture {
  description: string;
  stack: ArchitectureStack[];
}

export interface ArchitectureStack {
  title: string;
  description: string;
}

export interface Stats {
  label: string;
  value: string;
}
