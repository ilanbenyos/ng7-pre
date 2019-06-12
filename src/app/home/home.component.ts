import {Component, Input, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-home',
  template:`
    <div class="home d-flex flex-column mb-4" *ngIf="user">
      <h1 class="mb-3 font-weight-bold">Hello {{user.name}}!</h1>
      <section class="graph d-flex mb-4">
        <div class="sales graph-section bg-primary block-border"></div>
        <div class="reports graph-section bg-success block-border"></div>

      </section>
      <section class="boxes justify-content-between row">

        <app-task [tasks]="user.tasks" class="block col-sm"></app-task>
        <app-message [msgs]="user.messages" class="block col-sm"></app-message>
        <app-activity [activities]="user.activities" class="block col-sm"></app-activity>

      </section>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user:any;
  constructor(private data: DataService ,private store: Store<any>) { }

  ngOnInit() {
    this.user = this.data.getUser();
  }

}

