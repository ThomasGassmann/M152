import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  private _teams: any[];

  constructor(private _dataService: DataService) { }

  public ngOnInit() {
    this._teams = this._dataService.getTeams();
  }

  public get teams(): any[] {
    return this._teams;
  }

}
