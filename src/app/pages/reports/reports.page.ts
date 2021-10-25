import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PreferenceService } from 'src/app/services/preference.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  userData: any;
  examsData = [];
  isLoading = true;
  constructor(public api: AuthService, public router: Router, public pref: PreferenceService) {
    this.pref.getUser().subscribe(res => {
      this.userData = JSON.parse(res);
    });
   }

  ngOnInit() {
    this.pref.getUserToken().then(resp => {
      this.getExamsData(resp.value, this.userData.candidateID);
    });
  }

  getExamsData(token, candId) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    this.api.getData(`/api/ExamEnrollment/GetEnrollmentByCandidateID/${candId}`, httpOptions).subscribe((res: any) => {
      this.userData = res.candidateModel;
      this.examsData = res.examEnrollmetDetailsModel;
      this.isLoading = false;
    });


  }

  gotoExamResult(id) {
    this.router.navigate(['/exam-result', id]);

  }
}
