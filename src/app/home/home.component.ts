import {Component, Input, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-home',
  template:`
    <div class="home d-flex flex-column" *ngIf="user">
      <h1 >Hello {{user.name}}</h1>
      <section class="graph d-flex mb-3">
        <div class="sales bg-primary block-border"></div>
        <div class="reports bg-success block-border ml-4"></div>

      </section>
      <section class="boxes d-flex justify-content-between">

        <app-task [tasks]="user.tasks" class="block block-border"></app-task>
        <app-message [msgs]="user.messages" class="block block-border"></app-message>
        <app-activity [activities]="user.activities" class="block block-border"></app-activity>

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

