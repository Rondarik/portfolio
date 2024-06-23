import { Component, inject } from '@angular/core';
import { IconComponent } from './icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [IconComponent, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  translate = inject(TranslationService);

}
