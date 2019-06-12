import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <app-block-header
      title="Messages"
      [successCount]='msgs.length'
    >
    </app-block-header>
    <div class="msg" *ngFor="let msg of msgs">
      <div class="msg">{{msg.msg}}</div>
      <div class="id">{{msg.id}}</div>
      <div class="date">{{msg.date}}</div>
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
