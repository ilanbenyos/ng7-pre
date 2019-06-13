import { Component, OnInit,  EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-nav',
  template:`
    <div class="nav-app position-fixed z-index-2">
      <div class="overlay" 
           (click)="toggleNav()" 
           [ngClass]="isNav ? 'is-nav': ''">{{isNav}}
      </div>
      <div class="nav py-2 d-flex flex-column" 
           [ngClass]="isNav ? 'is-nav': ''">
      <div class="logo py-3 px-4 d-flex">
        <i class="material-icons">home</i>
        <div class="title ml-2 h3">{{ title }}</div>
      </div>
      
      <ul class="d-flex flex-column">
          <li *ngFor="let item of links; let i = index" 
              class="p-3" 
              (click)="toggleNav()" >
            <a routerLink="{{item.id}}" class="d-flex">
              <i class="material-icons icon">{{item.icon}}</i>
              <span class="link-to ml-2">{{item.id}}</span>
            </a>
          </li>
        </ul>
    </div>
    </div>
  `,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  links: Array<object>;

  constructor() { }
  @Input()  title: string;
  @Input() isNav: boolean;
  @Output() emitter: EventEmitter<any[]> = new EventEmitter();

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
  toggleNav() {
    this.emitter.emit();
  }
}
