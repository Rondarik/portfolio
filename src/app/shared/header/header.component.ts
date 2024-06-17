import { Component, Renderer2} from '@angular/core';
import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [OverlayMenuComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor (private renderer: Renderer2){}
  
  showMenu = false;
  space = 100;
  
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
