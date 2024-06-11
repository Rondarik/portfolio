import { Component } from '@angular/core';
import { AnchorLinkComponent } from './anchor-link/anchor-link.component';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
    selector: 'app-overlay-menu',
    standalone: true,
    templateUrl: './overlay-menu.component.html',
    styleUrl: './overlay-menu.component.scss',
    imports: [AnchorLinkComponent, HeaderComponent]
})
export class OverlayMenuComponent {

  showMenu = false;
  anchorLinkText = ['About me','My skills', 'Portfolio'];

  setShowMenu(value: boolean){
    this.showMenu = value;
  }

}
