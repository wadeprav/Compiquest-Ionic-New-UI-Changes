import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamResultPageRoutingModule } from './exam-result-routing.module';

import { ExamResultPage } from './exam-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamResultPageRoutingModule
  ],
  declarations: [ExamResultPage]
})
export class ExamResultPageModule {}
