import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';


@Component({
  selector: 'app-obout-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './obout-me.component.html',
  styleUrl: './obout-me.component.scss'
})
export class OboutMeComponent {

  translate = inject(TranslationService);

}
