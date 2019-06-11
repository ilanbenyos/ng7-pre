import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/reducers/tutorial.reducer';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './layout/nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ReadComponent } from './tutorials/read/read.component';
import { CreateComponent } from './tutorials/create/create.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { CalanderComponent } from './pages/calander/calander.component';
import { UsersComponent } from './pages/users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AboutComponent,
    NavComponent,
    ContactComponent,
    HomeComponent,
    ReadComponent,
    CreateComponent,
    TutorialsComponent,
    WorkflowComponent,
    StatisticsComponent,
    CalanderComponent,
    UsersComponent,
    SettingsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    StoreModule.forRoot({
      tutorial: reducer
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
