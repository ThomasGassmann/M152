import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

  private _team: any;

  constructor(private _dataService: DataService) { }

  public ngOnInit() {
    this._team = this._dataService.getTeams()[0];
  }

  public get team(): any {
    return this._team;
  }

}
