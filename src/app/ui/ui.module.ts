import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ui2Component } from './component/ui2/ui2.component';
import { UiComponent } from './component/ui/ui.component';
import { CoreModule } from '../core/core.module';
import { Ui3Component } from './component/ui3/ui3.component';

@NgModule({
  declarations: [Ui2Component, UiComponent, Ui3Component],
  imports: [CommonModule],
  exports: [Ui2Component, UiComponent, Ui3Component],
})
export class UiModule {}
