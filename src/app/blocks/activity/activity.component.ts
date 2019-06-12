import {Component, Input, OnInit} from '@angular/core';
// from: img msg action date
@Component({
  selector: 'app-activity',
  template: `
    <app-block-header
      title="Activities"
      [successCount]='activities.length'
    >
    </app-block-header>
    <div class="activity" *ngFor="let activity of activities">
      <div class="action">{{activity.action}}</div>
      <div class="from">{{activity.from}}</div>
      <div class="msg">{{activity.msg}}</div>
      <div class="img">{{activity.img}}</div>
      <div class="date">{{activity.date}}</div>
    </div>
  `,
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  @Input()  activities: Array<object>;

  constructor() { }

  ngOnInit() {
  }

}
