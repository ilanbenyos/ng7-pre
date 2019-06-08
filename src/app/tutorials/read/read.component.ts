import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Tutorial } from '../../models/tutorial.model';
import { AppState } from '../../app.state';
import * as TutorialActions from '../../state/actions/tutorial.actions';



@Component({
  selector: 'app-read',
  template: `
    <div class="right" *ngIf="tutorials">
    <h3>Tutorials</h3>
    <ul>
      <li (click)="delTutorial(i)" *ngFor="let tutorial of tutorials | async; let i = index">{{tutorial.name}}
      </li>
    </ul>
    </div>
  `,
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;
  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  ngOnInit() {}
// In the class, add:
  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) );
  }
}
