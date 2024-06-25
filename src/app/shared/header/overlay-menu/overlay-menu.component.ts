import { Component, Output, EventEmitter, inject } from '@angular/core';
import { HeaderComponent } from '../header.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../translation.service';

@Component({
    selector: 'app-overlay-menu',
    standalone: true,
    templateUrl: './overlay-menu.component.html',
    styleUrl: './overlay-menu.component.scss',
    imports: [ HeaderComponent, CommonModule, TranslateModule]
})
export class OverlayMenuComponent {

  translate = inject(TranslationService);

  showMenu = false;
  anchorLinkText = ['About me','My skills', 'Portfolio'];
  @Output()setMenu = new EventEmitter<boolean>();

  setShowMenu(value: boolean){
    this.showMenu = value;
  }
  closeMenu(){
    this.setMenu.emit(false);
  }

  onNavigate(buttonLink:string){
    window.open(buttonLink, "_blank");
  }

}
