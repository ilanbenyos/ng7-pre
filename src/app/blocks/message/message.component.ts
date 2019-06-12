import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <app-block-header
      title="Messages"
      [successCount]='msgs.length'
    >
    </app-block-header>
    <div class="list-group">

    <div class="msg d-flex p-3 justify-content-between align-items-center list-group-item list-group-item-action" 
         *ngFor="let msg of msgs">
      <div class="avatar flex-shrink-0">
        <img [src]="msg.img">
      </div>
      <div class="main font-xs ml-2 d-flex flex-column flex-grow-1">
       <div class="item-header d-flex">
        <div class="from font-weight-bold">{{msg.from}}</div>
        <div class="date ml-2 text-secondary font-weight-light">{{msg.date | getTimeAgo}}</div>
       </div>
        <div class="msg truncate">{{msg.msg}}</div>
        <div class="bottom">
          <i class="material-icons font-xs rol-btn text-secondary">settings</i>
          <i class="material-icons font-xs rol-btn ml-2 text-secondary">reply</i>


        </div>
      </div>
    </div>
  `,
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input()  msgs: Array<object>;

  constructor() { }

  ngOnInit() {
  }

}
