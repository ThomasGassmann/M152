import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  teams = [
    {
      img: 'http://www.esportsinsider.com/wp-content/uploads/2016/11/HelsinkiREDS-1.jpg',
      title:'Helsinki REDS',
      caption:'Helsinki, Finnland'
    }, {
      img: 'http://www.esportsinsider.com/wp-content/uploads/2016/11/HelsinkiREDS-1.jpg',
      title:'Helsinki REDS',
      caption:'Helsinki, Finnland'
    }];
  games = [
    {
      img: 'https://tbsila.cdn.turner.com/toonla/images/cnapac/picker/item/gpfm---ben-10---hero-time---704x384/au/ben10-herotime-websitegpfm-704x384.jpg',
      title: 'Ben 10 Hero Time',
      caption: 'Helsinki, Finnland'
    }, {
      img: 'http://www.esportsinsider.com/wp-content/uploads/2016/11/HelsinkiREDS-1.jpg',
      title: 'Helsinki REDS',
      caption: 'Helsinki, Finnland'
    }];

  constructor() { }

  ngOnInit() {
  }

}
