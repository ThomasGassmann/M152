import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { TeamListComponent } from './team-list/team-list.component';
import { GameListComponent } from './game-list/game-list.component';
import { ContactComponent } from './contact/contact.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
      path: 'contact',
      component: ContactComponent
  },
  {
      path: 'games',
      component: GameListComponent
  },
  {
      path: 'teams',
      component: TeamListComponent
  },
  {
      path: 'signup',
      component: SignUpComponent
  },
  {
      path: 'games/details',
      component: GameDetailComponent
  },
  {
      path: 'teams/details',
      component: TeamDetailComponent
  },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
