import { Component, Renderer2} from '@angular/core';
import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [OverlayMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor (private renderer: Renderer2){}
  
  showMenu = false;
  
  toggleMenu(){
    if (this.showMenu){
      this.showMenu = false;
      this.renderer.removeStyle(document.body, 'overflow');
    }else {
      this.showMenu = true;
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    }
  }

  closeMenu(value:boolean){
    this.showMenu = value;
    this.renderer.removeStyle(document.body, 'overflow');
  }

}
