import {Component, Input, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-home',
  template:`
    <div class="home d-flex flex-column mb-4" *ngIf="user">
      <h1 class="mb-3 font-weight-bold">Hello {{user.name}}!</h1>
      <section class="graph d-flex mb-4">
        <div class="sales bg-primary block-border"></div>
        <div class="reports bg-success block-border ml-4"></div>

      </section>
      <section class="boxes d-flex justify-content-between">

        <app-task [tasks]="user.tasks" class="block "></app-task>
        <app-message [msgs]="user.messages" class="block"></app-message>
        <app-activity [activities]="user.activities" class="block"></app-activity>

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

