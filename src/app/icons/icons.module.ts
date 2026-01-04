import { NgModule } from '@angular/core';
import {
  CalendarDays,
  Check,
  ChevronRight,
  Copy,
  ExternalLink,
  FileText,
  Github,
  Link,
  Linkedin,
  LucideAngularModule,
  Mail,
  MapPin,
  University,
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
      Link,
      CalendarDays,
      University,
      ExternalLink,
      MapPin,
    }),
  ],
  exports: [LucideAngularModule],
})
export class IconsModule {}
