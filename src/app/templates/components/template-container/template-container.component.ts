import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss'],
})
export class TemplateContainerComponent implements OnInit {
  // le input s'effectue après le constructor
  @Input() public title: string;
  constructor() {
    this.title = 'Ohhhhh le joli title';
  }

  ngOnInit(): void {}
}
