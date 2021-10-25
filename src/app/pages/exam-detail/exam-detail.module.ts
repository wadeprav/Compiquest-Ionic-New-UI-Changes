import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamDetailPageRoutingModule } from './exam-detail-routing.module';

import { ExamDetailPage } from './exam-detail.page';
import { ExpandableComponent } from 'src/app/components/expandable/expandable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamDetailPageRoutingModule
  ],
  declarations: [ExamDetailPage]
})
export class ExamDetailPageModule {}
