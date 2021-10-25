import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  // {
  //   path: 'reports',
  //   loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsPageModule)
  // },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'exam-detail',
    loadChildren: () => import('./pages/exam-detail/exam-detail.module').then(m => m.ExamDetailPageModule)
  },
  {
    path: 'exam-take',
    loadChildren: () => import('./pages/exam-take/exam-take.module').then(m => m.ExamTakePageModule)
  },
  {
    path: 'exam-info',
    loadChildren: () => import('./pages/exam-info/exam-info.module').then(m => m.ExamInfoPageModule)
  },
  {
    path: 'exam-result/:id',
    loadChildren: () => import('./pages/exam-result/exam-result.module').then(m => m.ExamResultPageModule)
  },
  {
    path: 'create-exam',
    loadChildren: () => import('./pages/create-exam/create-exam.module').then(m => m.CreateExamPageModule)
  },
  {
    path: 'question-result',
    loadChildren: () => import('./pages/question-result/question-result.module').then(m => m.QuestionResultPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./pages/analysis-report/analysis-report.module').then(m => m.AnalysisReportPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
