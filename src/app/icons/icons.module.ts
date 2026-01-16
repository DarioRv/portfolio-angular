import { NgModule } from '@angular/core';
import {
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Copy,
  Expand,
  ExternalLink,
  FileText,
  Github,
  Link,
  Linkedin,
  LucideAngularModule,
  Mail,
  MapPin,
  University,
  X,
} from 'lucide-angular';

@NgModule({
  declarations: [],
  imports: [
    LucideAngularModule.pick({
      Github,
      Linkedin,
      Mail,
      Copy,
      Check,
      FileText,
      ChevronRight,
      ChevronLeft,
      Link,
      CalendarDays,
      University,
      ExternalLink,
      MapPin,
      ChevronDown,
      ChevronUp,
      Expand,
      X,
    }),
  ],
  exports: [LucideAngularModule],
})
export class IconsModule {}
