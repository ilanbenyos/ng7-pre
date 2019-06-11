import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  // templateUrl: './header.component.html',
  template:`
  <div class="header p-3 d-flex justify-content-between">
    <div class="left">
      <i class="material-icons">menu</i>
      <i class="material-icons">search</i>
    </div>
    <div class="rigth">
      <i class="material-icons">search</i>
      <i class="material-icons">notifications</i>
      <i class="material-icons">email</i>
    </div>

  </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
