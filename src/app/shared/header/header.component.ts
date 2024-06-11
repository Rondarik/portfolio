import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  setMenu = false;
  @Output()showMenu = new EventEmitter<boolean>();
  
  sendShowMenu(){
    if (this.setMenu){
      this.setMenu = false;
    }else {
      this.setMenu = true;
    }
    this.showMenu.emit(this.setMenu);
  }
}
