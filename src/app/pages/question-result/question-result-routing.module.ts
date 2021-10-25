import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionResultPage } from './question-result.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionResultPageRoutingModule {}
