import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamInfoPageRoutingModule } from './exam-info-routing.module';

import { ExamInfoPage } from './exam-info.page';
import { ExpandableComponent } from 'src/app/components/expandable/expandable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamInfoPageRoutingModule
  ],
  declarations: [ExamInfoPage, ExpandableComponent]
})
export class ExamInfoPageModule {}
