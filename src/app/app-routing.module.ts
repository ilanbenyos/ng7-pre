import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { AboutComponent } from './about/about.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { ContactComponent } from './contact/contact.component';

import { WorkflowComponent } from './pages/workflow/workflow.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { CalanderComponent } from './pages/calander/calander.component';
import { UsersComponent } from './pages/users/users.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'home', component: HomeComponent },
  { path: 'workflow', component: WorkflowComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'calender', component: CalanderComponent },
  { path: 'users', component: UsersComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
