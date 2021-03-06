import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TeamListComponent } from './team-list/team-list.component';
import { GameListComponent } from './game-list/game-list.component';
import { ContactComponent } from './contact/contact.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    TeamListComponent,
    GameListComponent,
    ContactComponent,
    GameDetailComponent,
    TeamDetailComponent,
    ContentCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
