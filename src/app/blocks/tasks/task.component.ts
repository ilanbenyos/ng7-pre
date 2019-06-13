import {Component, Input, OnInit} from '@angular/core';
import {Task } from '../../models/tutorial.model'
@Component({
  selector: 'app-task',
  template: `
    <app-block-header
      title="Tasks"
      [successCount]='tasks.length'
      [errorCount]='delaysLen()'
    >
    </app-block-header>
    <div class="list-group">
      <div *ngFor="let task of tasks" 
           class="task d-flex p-3 justify-content-between align-items-center list-group-item list-group-item-action">
        <div class="avatar avatar-small bg-primary flex-shrink-0" >{{task.msg[0].toLocaleUpperCase()}}</div>
        <div class="main font-xs ml-3 d-flex flex-column flex-grow-1">
          <div class="msg truncate font-weight-bold font-sm">{{task.msg}}</div>
          <div  [ngClass]="['date d-flex align-items-center',isDelay(task.date)? 'text-danger-1':'']" >
            <i class="material-icons font-sm rol-btn mr-2">access_time</i>
            <span >{{task.date | getTimeAgo}}</span></div>
        </div>
        <div class="dots-3 rol-btn flex-shrink-0">
        </div>
      </div>
    </div>
  
  `,
  styleUrls: ['./tasks.component.scss']
})
export class TaskComponent implements OnInit {
  @Input()  tasks: Task[];

  constructor() { }

  ngOnInit() {
  }
  isDelay(time){
    return time < Date.now();
  }
  delaysLen(){
    let len = 0;
    this.tasks.forEach(i=> {
      if(this.isDelay(i.date))len++
    });
    return len
  }
}
