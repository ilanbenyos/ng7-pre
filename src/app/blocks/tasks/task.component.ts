import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
    <app-block-header
      title="Tasks"
      [successCount]='tasks.length'
      [errorCount]='tasks.length'
    >
    </app-block-header>
    <div class="task" *ngFor="let task of tasks" 
         class="d-flex p-3 block-border-bottom justify-content-between align-items-center">
      <div class="avatar avatar-small bg-primary flex-shrink-0" >{{task.msg[0]}}</div>
      <div class="main font-xm ml-2 d-flex flex-column flex-grow-1">
        <div class="msg truncate font-weight-bold">{{task.msg}}</div>
        <div class="date align-items-center mt-1">
          <i class="material-icons font-xm rol-btn mr-2">access_time</i>
          <span>{{task.date}}</span></div>
      </div>
      <div class="dots-3 rol-btn flex-shrink-0">
      </div>
    </div>
  
  `,
  styleUrls: ['./tasks.component.scss']
})
export class TaskComponent implements OnInit {
  @Input()  tasks: Array<object>;

  constructor() { }

  ngOnInit() {
  }

}
