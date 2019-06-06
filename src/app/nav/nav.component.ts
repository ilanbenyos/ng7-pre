import { Component, OnInit,  EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor() { }
  @Input()  title: string;
  ngOnInit() {
  }
}
