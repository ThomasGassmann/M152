import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  private _game: any;
  private _teams: any[];

  constructor(private _dataService: DataService) { }

  public ngOnInit() {
    this._game = this._dataService.getGames()[0];
    this._teams = this._dataService.getTeams();
  }

  public get game(): any {
    return this._game;
  }

  public get teams(): any[] {
    return this._teams;
  }

}
