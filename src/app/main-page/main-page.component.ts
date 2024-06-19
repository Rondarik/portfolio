import { Component } from '@angular/core';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { OboutMeComponent } from './obout-me/obout-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ContactComponent } from './contact/contact.component';
import { IntroductionComponent } from './introduction/introduction.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [PortfolioComponent, OboutMeComponent, MySkillsComponent, HeaderComponent, ContactComponent, IntroductionComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
