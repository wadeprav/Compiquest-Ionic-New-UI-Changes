import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PreferenceService } from 'src/app/services/preference.service';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.page.html',
  styleUrls: ['./exam-result.page.scss'],
})
export class ExamResultPage implements OnInit {
  canId: any;
  resultData = [];
  isLoading = true;
  totalMarks: any;
  candidateRes: any;
  obtainedMarks: any;
  constructor(private route: ActivatedRoute, private api: AuthService, public prefs: PreferenceService, public router: Router) {
    this.canId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.prefs.getUserToken().then(resp => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + resp.value
        })
      };
      this.api.getData(`/api/ExamResult/GetResultSubjectWiseByQPResultID/${this.canId}`, httpOptions).subscribe((res: any) => {
        console.log(res);
        this.resultData = res.subjectWiseResult;
        this.calculateTotal();
        this.candidateRes = res.candidateQPDetails;
        this.isLoading = false;
      });
    });
  }

  calculateTotal() {
    this.totalMarks = this.resultData.reduce((res, val) => res + val.maximumMarksPerSubject, 0);
    this.obtainedMarks = this.resultData.reduce((res, val) => res + val.marksObtained, 0);
    console.log(this.totalMarks);
  }

  gotoQuesResult(qpId, subId) {

    const navigationExtras: NavigationExtras = {
      state: {
        qAData: {
          qpResId: qpId,
          subjId: subId
        }
      }
    };
    this.router.navigate(['question-result'], navigationExtras);
  }

  Cancel() {
    location.reload();
    this.router.navigate(['/home']);
  }
}
