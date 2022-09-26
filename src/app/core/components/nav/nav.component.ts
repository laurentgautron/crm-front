import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public numberVersion!: number;

  constructor(private versionService: VersionService) {}

  ngOnInit(): void {}

  increment() {
    this.versionService.incrementVersion();
  }
}
