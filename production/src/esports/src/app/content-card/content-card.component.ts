import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  private _title: string;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public set title(value: string) {
    this._title = value;
  }

  public get title(): string {
    return this._title;
  }

}
