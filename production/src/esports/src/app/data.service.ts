import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  public getGames(): any[] {
    return [
      {
        img: '/assets/ben10.png',
        title: 'Ben 10 Hero Time',
        caption: 'A game!',
        description: 'Billy Billions has stolen the Rustbucket! Help Ben to use the power of the Omnitrix to jump, run and smash in this exciting platform adventure',
        video: '/assets/video/video.mp4',
        subtitles: [
          {
            src: '/assets/video/subtitles/english.vtt',
            label: 'English',
            srclang: 'en'
          },
          {
            src: '/assets/video/subtitles/german.vtt',
            label: 'Deutsch',
            srclang: 'de'
          }
        ]
      }, {
        img: '/assets/mc.png',
        title: 'Minecraft',
        caption: 'Another game!',
        description: 'Foo... Bar.',
        video: '/assets/video/video.mp4',
        subtitles: [
          {
            src: '/assets/video/subtitles/english.vtt',
            label: 'English',
            srclang: 'en'
          },
          {
            src: '/assets/video/subtitles/german.vtt',
            label: 'Deutsch',
            srclang: 'de'
          }
        ]
      }];
  }

  public getTeams(): any[] {
    return [
      {
        img: '/assets/reds.png',
        title: 'Helsinki REDS',
        caption: 'Helsinki, Finnland',
        description: 'The original Helsinki REDS Overwatch team was assembled by team manager Christer Kasurinen and the first team captain Roope “Ruape” Kurkela. During the fall of 2016, they gathered a tight-knit group of players committed to working hard and growing together to become a team that is competitive in Overwatch on an international level. In the fall of 2017, the Helsinki REDS announced an expansion into Dota 2 with our first roster for the game.'
      }, {
        img: '/assets/renegades.png',
        title: 'Detroit Renegades',
        caption: 'Detroit, USA',
        description: 'The Renegades, also known as the Detroit Renegades and previously LA Renegades, is a professional eSports organization that fields teams in Counter-Strike: Global Offensive, Overwatch, Paladins, Rocket League, Vainglory, and Super Smash Bros.'
      }];
  }

}
