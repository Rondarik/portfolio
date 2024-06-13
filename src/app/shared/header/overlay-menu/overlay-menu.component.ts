import { Component, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from '../header.component';

@Component({
    selector: 'app-overlay-menu',
    standalone: true,
    templateUrl: './overlay-menu.component.html',
    styleUrl: './overlay-menu.component.scss',
    imports: [ HeaderComponent]
})
export class OverlayMenuComponent {

  showMenu = false;
  anchorLinkText = ['About me','My skills', 'Portfolio'];
  @Output()setMenu = new EventEmitter<boolean>();

  setShowMenu(value: boolean){
    this.showMenu = value;
  }
  closeMenu(){
    this.setMenu.emit(false);
  }

}
