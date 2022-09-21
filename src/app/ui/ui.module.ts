import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ui2Component } from './component/ui2/ui2.component';
import { UiComponent } from './component/ui/ui.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [Ui2Component, UiComponent],
  imports: [CommonModule],
  exports: [Ui2Component, UiComponent],
})
export class UiModule {}
