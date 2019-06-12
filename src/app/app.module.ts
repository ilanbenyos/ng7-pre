import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/reducers/tutorial.reducer';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { CalanderComponent } from './pages/calander/calander.component';
import { UsersComponent } from './pages/users/users.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HeaderComponent } from './layout/header/header.component';
import { TaskComponent } from './blocks/task/task.component';
import { MessageComponent } from './blocks/message/message.component';
import { ActivityComponent } from './blocks/activity/activity.component';
import { BlockHeaderComponent } from './blocks/block-header/block-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    WorkflowComponent,
    StatisticsComponent,
    CalanderComponent,
    UsersComponent,
    SettingsComponent,
    HeaderComponent,
    TaskComponent,
    MessageComponent,
    ActivityComponent,
    BlockHeaderComponent
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
