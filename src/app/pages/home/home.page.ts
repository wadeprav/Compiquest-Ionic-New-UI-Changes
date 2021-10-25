import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { PreferenceService } from 'src/app/services/preference.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  userData: any;
  examsData = [];
  token: any;
  examListBackup: any[];
  isLoading = true;
  constructor(private menuCtrl: MenuController, public api: AuthService, public router: Router, public pref: PreferenceService) {
    this.pref.getUser().subscribe(res => {
      this.userData = JSON.parse(res);
    });
    this.menuCtrl.enable(true);
  }
  ngOnInit(): void {
    this.pref.getUserToken().then(resp => {
      this.token = resp.value;
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
      console.log(res);
      this.userData = res.candidateModel;
      this.examsData = res.examEnrollmetDetailsModel;
      this.examListBackup = this.examsData;
      this.isLoading = false;
    });


  }
  gotoExamDetail(enrolDetailsId, candId, subjectId, appeard, qpResId) {

    this.pref.setExamData({ candId: candId, examEnrolDetail: enrolDetailsId, subjId: subjectId, qpResultId: qpResId, isAppeard: appeard });

    this.router.navigate(['/exam-info']);

  }

  gotoResult(id) {
    this.router.navigate(['/exam-result', id]);
  }

  async filterList(evt) {
    this.examsData = this.examListBackup;
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.examsData = this.examsData.filter(curExam => {
      if (curExam.qpUniqueName && searchTerm) {
        return (curExam.qpUniqueName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
  getPapersList(e) {
    this.getExamsData(this.token, this.userData.candidateID);
    if (e)
      e.target.complete();
  }
}
