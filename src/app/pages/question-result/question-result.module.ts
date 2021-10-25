import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionResultPageRoutingModule } from './question-result-routing.module';

import { QuestionResultPage } from './question-result.page';
import { MathjaxDirective } from '../../directives/mathjax.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionResultPageRoutingModule
  ],
  declarations: [QuestionResultPage, MathjaxDirective]
})
export class QuestionResultPageModule {}
