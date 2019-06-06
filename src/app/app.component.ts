import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <app-nav [title]='title'></app-nav>
    <section>
      <router-outlet></router-outlet>
    </section>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private data: DataService) { }
  title = 'המשחק של זוהר';
  ngOnInit() {
    this.data.initScore()
  }
}
