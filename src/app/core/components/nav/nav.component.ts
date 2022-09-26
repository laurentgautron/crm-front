import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public numberVersion!: number;

  constructor(private coreService: CoreService) {
    this.coreService.version.subscribe((data) => (this.numberVersion = data));
  }

  ngOnInit(): void {}

  incrementVersion() {
    this.numberVersion++;
    this.coreService.version.next(this.numberVersion);
  }
}
