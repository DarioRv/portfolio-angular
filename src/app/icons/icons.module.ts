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
    }),
  ],
  exports: [LucideAngularModule],
})
export class IconsModule {}
