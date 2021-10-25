import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { PreferenceService } from 'src/app/services/preference.service';

@Component({
  selector: 'app-question-result',
  templateUrl: './question-result.page.html',
  styleUrls: ['./question-result.page.scss'],
})
export class QuestionResultPage implements OnInit {
  questionResults = [];
  qpData: any;
  token: any;
  constructor(public route: ActivatedRoute, public http: HttpClient, public router: Router, public auth: AuthService, public pref: PreferenceService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.qpData = this.router.getCurrentNavigation().extras.state.qAData;
        console.log(this.qpData);
      }
    });
  }

  ngOnInit() {
    this.pref.getUserToken().then((tok) => {
      this.token = tok.value;
      if (this.token) {
        this.getQuestionsResult();
      }

    });
  }

  getQuestionsResult() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token
      })

    };
    this.auth.getData(`/api/ExamResult/GetQuestionWiseDetailResult/${this.qpData.qpResId}/${this.qpData.subjId}`, httpOptions).subscribe((ansRes: any) => {
      console.log(ansRes);
      this.questionResults = ansRes;
    });

  }
}
