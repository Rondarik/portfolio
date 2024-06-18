import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgClass],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = [
    {
      name: 'Join',
      skills: 'JavaScript | CSS | HTML | Scrum',
      discription: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: './assets/img/project-join.png',
      buttonText: 'Use'
    },
    {
      name: 'El Pollo Loco',
      skills: 'JavaScript | CSS | HTML',
      discription: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      image: './assets/img/project-EPL.png',
      buttonText: 'Play',
      reverse: true
    },
    {
      name: 'Pokédex',
      skills: 'JavaScript | CSS | HTML | Api',
      discription: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      image: './assets/img/project-pokedex.png',
      buttonText: 'Enjoy'
    }
  ]


  
}
