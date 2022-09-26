import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BtnComponent],
  imports: [CommonModule, RouterModule],
  exports: [TemplatesModule, IconsModule, BtnComponent],
})
export class SharedModule {}
