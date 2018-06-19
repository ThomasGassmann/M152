import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private _teams = [
    {
      img: '/assets/reds.png',
      title: 'Helsinki REDS',
      caption: 'Helsinki, Finnland'
    }, {
      img: '/assets/renegades.png',
      title: 'Detroit Renegades',
      caption: 'Detroit, USA'
    }];

  private _games = [
    {
      img: '/assets/ben10.png',
      title: 'Ben 10 Hero Time',
      caption: 'A game!'
    }, {
      img: '/assets/mc.png',
      title: 'Minecraft',
      caption: 'Another game!'
    }];

  constructor() { }

  public get games(): any[] {
    return this._games;
  }

  public get teams(): any[] {
    return this._teams;
  }

}
