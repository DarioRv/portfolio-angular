import { Component } from '@angular/core';
import { IconsModule } from 'app/icons/icons.module';

@Component({
  selector: 'download-cv-button',
  standalone: true,
  imports: [IconsModule],
  templateUrl: './download-cv-button.component.html',
  styles: ``,
})
export class DownloadCvButtonComponent {
  url = 'https://drive.google.com/file/d/1SOMJ1ox0gFQpol8NoVcAH-g_qXHRZ98m';
}
