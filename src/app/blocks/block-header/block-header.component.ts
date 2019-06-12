import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-block-header',
  template: `
    <div class="header p-3 d-flex justify-content-between block-border-bottom">
      <div class="font-sm font-weight-bold">{{title}}</div>
      <div class="counts d-flex">
        <div class="success-avatar avatar avatar-small bg-primary" *ngIf="successCount">{{successCount}}</div>
        <div class="error-avatar avatar avatar-small ml-2 bg-danger" *ngIf="errorCount">{{errorCount}}</div>
      </div>
    </div>
  
  `,
  styleUrls: ['./block-header.component.scss']
})
export class BlockHeaderComponent implements OnInit {
  @Input()  title: string;
  @Input()  errorCount: number;
  @Input()  successCount: number;

  constructor() { }

  ngOnInit() {
  }

}
