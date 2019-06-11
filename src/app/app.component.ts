import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <app-nav [title]='title' classs="nav"></app-nav>
    <app-header></app-header>
    <section>
      <router-outlet></router-outlet>
    </section>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private data: DataService) { }
  title = 'Merkury';
  ngOnInit() {
    this.data.initScore()
  }
}
