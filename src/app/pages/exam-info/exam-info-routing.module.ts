import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamInfoPage } from './exam-info.page';

const routes: Routes = [
  {
    path: '',
    component: ExamInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamInfoPageRoutingModule {}
