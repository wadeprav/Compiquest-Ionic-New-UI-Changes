import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalysisReportPage } from './analysis-report.page';

const routes: Routes = [
  {
    path: '',
    component: AnalysisReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalysisReportPageRoutingModule {}
