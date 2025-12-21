import { NgModule } from '@angular/core';
import {
  Check,
  ChevronRight,
  Copy,
  FileText,
  Github,
  Link,
  Linkedin,
  LucideAngularModule,
  Mail,
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
    }),
  ],
  exports: [LucideAngularModule],
})
export class IconsModule {}
