import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { OboutMeComponent } from './main-page/obout-me/obout-me.component';
import { MySkillsComponent } from './main-page/my-skills/my-skills.component';
import { PortfolioComponent } from './main-page/portfolio/portfolio.component';
import { ContactComponent } from './main-page/contact/contact.component';
import { OverlayMenuComponent } from './shared/header/overlay-menu/overlay-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainPageComponent, HeaderComponent, OboutMeComponent, MySkillsComponent,PortfolioComponent,ContactComponent, OverlayMenuComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
