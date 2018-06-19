import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  private _games: any[];

  constructor(private _dataService: DataService) { }

  public ngOnInit() {
    this._games = this._dataService.getGames();
  }

  public get games(): any[] {
    return this._games;
  }

}
