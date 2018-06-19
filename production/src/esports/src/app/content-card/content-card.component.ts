import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  private _title: string;
  private _cardless: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public set title(value: string) {
    this._title = value;
  }

  @Input()
  public set cardless(value: boolean) {
    this._cardless = value;
  }

  public get title(): string {
    return this._title;
  }

  public get cardless(): boolean {
    return this._cardless;
  }

}
