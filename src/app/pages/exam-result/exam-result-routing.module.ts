import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamResultPage } from './exam-result.page';

const routes: Routes = [
  {
    path: '',
    component: ExamResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamResultPageRoutingModule {}
