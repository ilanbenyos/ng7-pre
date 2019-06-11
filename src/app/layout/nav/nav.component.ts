import { Component, OnInit,  EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-nav',
  template:`
  <header>
  <div class="nav py-2">
    <a routerLink="/" class="logo">{{ title }}</a>
    <i class="material-icons">home</i>

    <nav>
      <ul>
        <li *ngFor="let item of links; let i = index">
          <a routerLink="{{item.id}}">
            <i class="material-icons">{{item.icon}}</i>
            {{item.id}}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>
  `,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  links: Array<object>;

  constructor() { }
  @Input()  title: string;
  ngOnInit() {
    this.links=[
      {id:'home',icon:'home'},
      {id:'workflow',icon:'view_agenda'},
      {id:'statistics',icon:'trending_down'},
      {id:'calender',icon:'calendar_today'},
      {id:'users',icon:'perm_identity'},
      {id:'settings',icon:'settings'},
    ]
  }
}
