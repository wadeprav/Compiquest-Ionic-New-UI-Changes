import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamTakePageRoutingModule } from './exam-take-routing.module';

import { ExamTakePage } from './exam-take.page';
import { ExpandableComponent } from '../../components/expandable/expandable.component';
import { MathjaxDirective } from '../../directives/mathjax.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamTakePageRoutingModule
  ],
  declarations: [ExamTakePage, ExpandableComponent, MathjaxDirective]
})
export class ExamTakePageModule {}
