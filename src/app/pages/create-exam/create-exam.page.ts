import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { PreferenceService } from 'src/app/services/preference.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.page.html',
  styleUrls: ['./create-exam.page.scss'],
})
export class CreateExamPage implements OnInit {
  createExamAPILink;
  userData: any;
  token: any;
  allExamType = [];
  genexamId: any;
  isSub = false;
  subList = [];
  secList = [];
  httpOptions
  lessonList = [];
  secListSave = [];
  lessonListSave = [];
  crExamType: any;
  papCont: any;
  gnericPaperList = [];
  qpCriId: any;

  selfExam = {
    candidateID: 0,
    qpDefaultCriteriaFlag: true,
    examTypeID: 0,
    subjectID: 0,
    sectionID: 0,
    lessonID: 0,
    topicID: 0,
    toughFlag: true
  };
  constructor(public toast: ToastController, public api: AuthService, public navCtrl: NavController, public pref: PreferenceService, public http: HttpClient, public alertController: AlertController, public router: Router) { }

  ngOnInit() {
    this.pref.getUser().subscribe((res) => {
      this.userData = JSON.parse(res);
      this.selfExam.candidateID = this.userData.candidateID;
    });
    this.pref.getUserToken().then((toke) => {
      this.token = toke.value;
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        })
      };

    });
  }


  getAllExams(e) {
    this.crExamType = '';
    this.crExamType = e.detail.value;

    this.api.getData(`/api/CreateExamForOnlineCandidate/GetCandidateExamTypes/${this.userData.candidateID}`, this.httpOptions).subscribe((exRes: any) => {
      this.allExamType = exRes.value;

    });

  }
  getComplexity(e) {
    const comp = e.detail.value;
    if (comp == 'tough') {
      this.selfExam.toughFlag = true;
    } else {
      this.selfExam.toughFlag = false;
    }
  }

  getGenericExam(e) {
    this.genexamId = e.detail.value.examTypeId;
    console.log(this.genexamId);
    this.api.getData(`/api/CreateExamForOnlineCandidate/GetGenericQuestionPaperList/${this.userData.candidateID}/${this.genexamId}`, this.httpOptions).subscribe((examRes: any) => {
      console.log(examRes);
      this.gnericPaperList = examRes.value;
    });
  }
  getExamType(e) {
    this.subList = [];
    const examId = e.detail.value.examTypeId;
    this.selfExam.examTypeID = examId;

    this.api.getData(`/api/CreateExamForOnlineCandidate/GetSubjectList/${examId}`, this.httpOptions).subscribe((examRes: any) => {

      console.log(examRes);
      this.subList = examRes.value.subjectListViewModel;
    });
  }
  getGenricQuesPaper(e) {
    this.qpCriId = e.detail.value.questionPaperCriteriaId;
  }
  getSub(e) {
    this.selfExam.subjectID = e.detail.value.subjectID;
    this.getSecList(e.detail.value.subjectID);
  }
  getSec(e) {
    this.selfExam.sectionID = e.detail.value.sectionID;
    this.getLessList(e.detail.value.sectionID);
  }
  getLes(e) {
    this.selfExam.lessonID = e.detail.value.lessonID;
  }
  submitGeneric() {
    if (this.crExamType == 'self') {

      if (this.selfExam.examTypeID == 0) {
        this.presentAlert('Kindly Select exam type');
        return;
      }

      if (this.selfExam.subjectID != 0) {
        this.selfExam.qpDefaultCriteriaFlag = false;
      }
      this.isSub = true;


      if (this.userData.instituteID == "0") //Enable Create Exam for Online Candidate.
      {
        this.createExamAPILink = `/api/CreateExamForOnlineCandidate/CreateExamForOnlineCandidate`;
      }
      else if (this.userData.instituteID > 0 || this.userData.instituteID != null) //Enable Create Exam for Institute Candidate.
      {
        this.createExamAPILink = `/api/CreateExamForInstituteCandidate/CreateExamForInstituteCandidate`;
      }

      this.api.postData(this.createExamAPILink, this.selfExam, this.httpOptions).subscribe((res: any) => {
        // this.presentAlert(res.value);
        this.isSub = false;
        console.log(res);
        if (res.value == 'SUCCESS') {
          this.presentToast('Exam created');
          this.navCtrl.navigateRoot('/home');
          location.reload();
        } else {
          this.presentAlert('There is problem creating exam');
        }
      });


    }
    else {
      if (this.genexamId == null) {
        this.presentAlert('Kindly Select exam type');
      } else if (this.qpCriId == null) {
        this.presentAlert('Kindly Select question paper');
      } else {
        this.isSub = true;

        this.http.post(`https://api.compiquest.com:8443/api/CreateExamForOnlineCandidate/InsertGenericPaperCriteria?CandidateID=${this.userData.candidateID}&QuestionPaperCriteriaID=${this.qpCriId}`, {}).subscribe(res => this.presentAlert(res));
        this.isSub = false;
        this.navCtrl.navigateRoot('/home');
      }
    }


  }
  presentAlert(msg) {
    this.alertController.create({
      header: 'Notification',
      message: msg,
      buttons: ['OK']
    }).then(aler => aler.present());
  }

  presentToast(msg) {
    this.toast.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

  cancelExam() {
    this.navCtrl.navigateRoot('/home');
  }

  selectPapCont(e) {
    this.papCont = e.detail.value;
  }

  getSecList(id) {
    this.secList = [];
    this.api.getData(`/api/CreateExamForOnlineCandidate/GetSectionsBySubject/${id}`, this.httpOptions).subscribe((resp: any) => {
      console.log(resp);
      this.secList = resp.value.sectionListViewModel;
    });
  }

  getLessList(id) {
    this.lessonList = [];
    this.api.getData(`/api/CreateExamForOnlineCandidate/GetLessonBySection/${id}`, this.httpOptions).subscribe((resp: any) => {
      console.log(resp);
      this.lessonList = resp.value.lessonListViewModel;
    });
  }
}
