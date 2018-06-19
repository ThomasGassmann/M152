import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private _teams: any[];

  private _games: any[];

  constructor(dataService: DataService) {
    this._teams = dataService.getTeams();
    this._games = dataService.getGames();
  }

  public get games(): any[] {
    return this._games;
  }

  public get teams(): any[] {
    return this._teams;
  }

}
