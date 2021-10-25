import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamTakePage } from './exam-take.page';

const routes: Routes = [
  {
    path: '',
    component: ExamTakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamTakePageRoutingModule {}
