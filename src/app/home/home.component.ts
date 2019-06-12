import {Component, Input, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user:any;
  constructor(private data: DataService ,private store: Store<any>) { }

  ngOnInit() {
    this.user = this.data.getUser();
  }

}

