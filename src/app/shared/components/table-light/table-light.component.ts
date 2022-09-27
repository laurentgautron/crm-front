import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss'],
})
export class TableLightComponent implements OnInit {
  @Input() public headers!: string[];
  //@Input() public collection!: any;
  // plus besoin du input car le ngFor est déplacé

  constructor() {
    console.log(this.headers);
    //console.log(this.collection);
  }

  ngOnChanges() {
    console.log(this.headers);
    //console.log(this.collection);
  }

  ngOnInit(): void {
    console.log(this.headers);
    //console.log(this.collection);
  }
}
