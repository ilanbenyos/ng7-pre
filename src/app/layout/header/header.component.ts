import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-header',
  template:`
  <div class="header py-4 px-header d-flex justify-content-between block-border">
    <div class="left d-flex align-items-center">
      <i class="material-icons rol-btn" (click)="toggleNav()">menu</i>
      <i class="material-icons rol-btn ml-3">search</i>
    </div>
    <div class="rigth d-flex align-items-center justify-content-center" *ngIf="user">
      <div class="btn text-white py-2 px-3 mr-4 font-weight-bold rol-btn align-items-center justify-content-center d-none d-sm-flex">
        <i class="material-icons rol-btn mr-2 opacity-05">add</i>
        <span>Add project</span>
      </div>
      <div class="add-project d-inline-block d-sm-none">
        <i class="material-icons rol-btn ml-3">add</i>
      </div>
        <div class="email d-inline-block position-relative">
        <i class="material-icons rol-btn ml-3">email</i>
        <span class="icon-badge badge ">{{user.messages.length}}</span>
      </div>
      <div class="notifications d-inline-block position-relative">
        <i class="material-icons rol-btn ml-3">notifications</i>
        <span class="icon-badge badge">4</span>
      </div>
        <div class="avatar ml-5 rol-btn" *ngIf="user">
          <img [src]="user.img">
        </div>
    </div>
  </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() emitter: EventEmitter<any[]> = new EventEmitter();
  @Input() user: object;

  constructor() {}

  ngOnInit() {

  }
  toggleNav() {
    this.emitter.emit();
  }
}
