import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


import { IonicModule } from '@ionic/angular';

import { AnalysisReportPageRoutingModule } from './analysis-report-routing.module';

import { AnalysisReportPage } from './analysis-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    AnalysisReportPageRoutingModule
  ],
  declarations: [AnalysisReportPage]
})
export class AnalysisReportPageModule {}
