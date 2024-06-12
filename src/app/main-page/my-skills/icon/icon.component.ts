import { Component } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {

  iconImages = [
    {
      img: './assets/img/angular.svg',
      name: 'Angular'
    },
    {
      img: './assets/img/typescript.svg',
      name: 'TypeScript'
    },
    {
      img: './assets/img/Javascript.svg',
      name: 'JavaScript'
    },
    {
      img: './assets/img/html.svg',
      name: 'HTML'
    },
    {
      img: './assets/img/css.svg',
      name: 'CSS'
    },
    {
      img: './assets/img/Firebase.svg',
      name: 'Firebase'
    },
    {
      img: './assets/img/git.svg',
      name: 'Git'
    },
    {
      img: './assets/img/c++.svg',
      name: 'C++'
    },
    {
      img: './assets/img/scrum.svg',
      name: 'Scrum'
    },
    {
      img: './assets/img/Api.svg',
      name: 'Rest-Api'
    },
    // {
    //   img: './assets/img/material-designe.svg',
    //   name: 'Material designe'
    // },
 ];

}
