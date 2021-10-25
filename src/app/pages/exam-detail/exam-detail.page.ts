import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';
import { PreferenceService } from 'src/app/services/preference.service';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.page.html',
  styleUrls: ['./exam-detail.page.scss'],
})
export class ExamDetailPage implements OnInit {
  data: any;
  candidateData: any;
  isLoading = true;
  loginToken: any;
  examTable = [];
  constructor(public router: Router,public prefs: PreferenceService, public api: AuthService, public navCtrl: NavController) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state.examStatus;

      this.prefs.setExamData({ candId: this.data.canId, examEnrolDetail: this.data.enDetId, subjId: this.data.subId ,qpResultId: this.data.qpResultId, isAppeared: this.data.isAppeard});
    }
  }

  ngOnInit() {
    this.prefs.getUserToken().then(resp => {
      this.getExamDetail(resp.value);
    });
  }


  getExamDetail(token) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    if (this.data) {
      this.api.getData(`/api/Exam/GetCandidateStartExamDetails/${this.data.enDetId}/${this.data.canId}/${this.data.subId}`, httpOptions).subscribe((res: any) => {
        console.log(res);
        alert(res);
        this.candidateData = res.examDetailsHeader;
        this.examTable = res.examDetailsSubjectWise;
        this.isLoading = false;
      }, (error) => {
        alert(error);
        this.isLoading = false;
      });
    }
  }



  gotoExamScreen() {
    this.router.navigate(['/exam-info']);
  }
}
