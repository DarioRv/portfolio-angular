import { NgModule } from '@angular/core';
import {
  CalendarDays,
  Check,
  ChevronRight,
  Copy,
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
    }),
  ],
  exports: [LucideAngularModule],
})
export class IconsModule {}
