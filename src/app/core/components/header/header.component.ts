import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public crmVersion!: Number;

  constructor(private versionService: VersionService) {
    versionService.numVersion.subscribe((data) => (this.crmVersion = data));
  }

  ngOnInit(): void {}
}
