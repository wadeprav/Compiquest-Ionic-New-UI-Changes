import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PreferenceService } from 'src/app/services/preference.service';
import { Storage } from '@capacitor/storage';
@Component({
  selector: 'app-exam-info',
  templateUrl: './exam-info.page.html',
  styleUrls: ['./exam-info.page.scss'],
})
export class ExamInfoPage implements OnInit {
  examSubjects = [];
  isLoading = true;
  exdata: any;
  resumeExamData: any;
  startExamData: any;
  constructor(public api: AuthService, public prefs: PreferenceService, public router: Router) {


    this.prefs.getExamData().then((res) => {
      this.exdata = JSON.parse(res.value);
      console.log(this.exdata);
    })
  }
  ionViewDidEnter() {
    console.log('did');

  }
  ngOnInit() {

  }
  ionViewWillEnter() {
    this.prefs.getUserToken().then((token: any) => {
      this.getExamDetail(token.value);
      if (this.exdata) {
        this.getResumeExamInfo(token.value);
      }
    });
  }

  getExamDetail(token) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    if (this.exdata) {
      this.api.getData(`/api/Exam/GetCandidateStartExamDetails/${this.exdata.examEnrolDetail}/${this.exdata.candId}/${this.exdata.subjId}`, httpOptions).subscribe((res: any) => {
        console.log(res);
        this.examSubjects = res.examDetailsSubjectWise;
        this.startExamData = res.examDetailsHeader;
        this.isLoading = false;
      }, (error) => {
        alert(error);
        this.isLoading = false;
      });
    }
  }

  expandContent(idx) {
    this.examSubjects.map((val, idex) => {
      if (idx === idex) {
        val.toggle = !val.toggle;
      }

    });

  }

  gotoExamTake(subId, mins, numbsOfQue) {
    Storage.remove({ key: 'examSubjData' });
    const examData = {
      subId: subId,
      examtime: mins,
      numberOfQues: numbsOfQue
    }
    Storage.set({ key: 'examSubjData', value: JSON.stringify(examData) });
    this.router.navigate(['/exam-take']);
  }

  getResumeExamInfo(token) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    if (this.exdata) {
      this.api.getData(`/api/Exam/GetOCResumeExamDetails/${this.exdata.examEnrolDetail}/${this.exdata.candId}/${this.exdata.subjId}`, httpOptions).subscribe((res: any) => {
        this.resumeExamData = res;
        console.log(this.resumeExamData);
      }, (error) => {
        console.log(error);
      });
    }
  }

  Cancel() {
    location.reload();
    this.router.navigate(['/home']);
  }
}
