import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public crmVersion!: Number;

  constructor(private coreService: CoreService) {
    coreService.version.subscribe((data) => (this.crmVersion = data));
  }

  ngOnInit(): void {}
}
