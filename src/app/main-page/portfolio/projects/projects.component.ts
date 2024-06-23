import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../translation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  translate = inject(TranslationService);

  projects = [
    {
      name: 'Join',
      skills: 'JavaScript | CSS | HTML | Scrum',
      discription: 'projectDiscription1',
      image: './assets/img/project-join.png',
      PageLink: 'http://join.marcus-harder.de',
      buttonText: 'Github',
      gitHubLink: 'https://github.com/Rondarik/Join',
    },
    {
      name: 'El Pollo Loco',
      skills: 'JavaScript | CSS | HTML',
      discription: 'projectDiscription2',
      image: './assets/img/project-EPL.png',
      buttonText: 'Github',
      PageLink: 'https://el-pollo-loco.marcus-harder.de/index.html',
      gitHubLink: 'https://github.com/Rondarik/el_pollo_loco',
      reverse: true,
    },
    {
      name: 'Pokédex',
      skills: 'JavaScript | CSS | HTML | Api',
      discription: 'projectDiscription3',
      image: './assets/img/project-pokedex.png',
      buttonText: 'Github',
      PageLink: 'https://pokedex.marcus-harder.de/index.html',
      gitHubLink: 'https://github.com/Rondarik/pokedex',

    }
  ] 

  onNavigate(buttonLink:string){
    window.open(buttonLink, "_blank");
  }
}

