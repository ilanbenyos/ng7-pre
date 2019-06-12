import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import * as actions from './state/actions/tutorial.actions';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';

@Component({
  selector: 'app-root',
  template: `
    <app-nav [title]='title' 
             class="nav"
             (emitter)="toggleNav()"
             [isNav]='isNav'
             ></app-nav>
    <app-header (emitter)="toggleNav()" [user]="user" class="position-fixed w-100"></app-header>
    <div class="app-page p-4">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private data: DataService, private store: Store<AppState>) { }
  title = 'Merkury';
  user:any;
  isNav:boolean;
  ngOnInit() {
    this.user = this.data.getUser();
    this.isNav =false;
  }
  toggleNav(){
    this.isNav = !this.isNav
  }
}
