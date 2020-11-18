import { Component, OnInit } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirectTo:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  componentes: Componente[] = [
    {
      icon:'american-football-outline',
      name:'Action Sheet',
      redirectTo:'/action-sheet'
    },
    {
      icon:'alert-circle-outline',
      name:'Alert',
      redirectTo:'/alert'
    },
    {
      icon:'beaker-outline',
      name:'Avatar',
      redirectTo:'/avatar'
    },
    {
      icon:'radio-button-off-outline',
      name:'Buttons',
      redirectTo:'/buttons'
    },
    {
      icon:'card-outline',
      name:'Cards',
      redirectTo:'/card'
    },
    {
      icon:'checkmark-circle-outline',
      name:'CheckMate',
      redirectTo:'/check'
    },
    {
      icon:'calendar-outline',
      name:'DateTime',
      redirectTo:'/date-time'
    },
    {
      icon:'car-outline',
      name:'Fab',
      redirectTo:'/fab'
    },
    {
      icon:'grid-outline',
      name:'Grid',
      redirectTo:'/grid'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
