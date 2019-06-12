
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
    <div class="list-group">
      <div class="activity d-flex justify-content-between align-items-center list-group-item " 
           *ngFor="let activity of activities ; let i = index">
        <div class="left ml-3 position-relative">
          <div class="vr" *ngIf="i>0"></div>
          <div class="avatar flex-shrink-0 ">
            <img [src]="activity.img">
          </div>
        </div>
        <div class="main  font-xs ml-2 d-flex flex-column flex-grow-1">
          <span class="upper truncate">
            <span class="from font-weight-bold">{{activity.from}}</span>
            <span class="action ml-1">{{activity.action}}</span>
            <span class="msg ml-1 ">{{activity.msg}}</span>
          </span>

          <span class="bottom mt-1 text-secondary">
            <i class="material-icons font-xs rol-btn text-secondary">access_time</i>
            <span class="date ml-2" >{{activity.date | getTimeAgo}}</span>
          </span>
      </div>
      </div>
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
