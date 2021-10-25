import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { PreferenceService } from 'src/app/services/preference.service';
import { Storage } from '@capacitor/storage';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-exam-take',
  templateUrl: './exam-take.page.html',
  styleUrls: ['./exam-take.page.scss'],
})
export class ExamTakePage implements OnInit {
  time: BehaviorSubject<string> = new BehaviorSubject('00:00:00');
  token: any;
  examData: any;
  isLoading = true;
  examSubjects = [];
  examTime: any;
  paperTime: any;
  exmHeader: any;
  quesData = [];
  selectedAnser: any;
  multianswers = [];
  updatedTime: any;
  answerSubmited = false;
  data: any;
  quetsIndexArray = [];
  examAsnwer = {
    candidateId: 0,
    quesPaperCriteriaID: 0,
    examEnrollmentDetailsID: 0,
    questionID: 0,
    qpAttemtedAnswerTableType: "",
    duration: 0,
    completionStatus: ''
  };
  constructor(public router: Router, public alertController: AlertController, public navCtrl: NavController, public api: AuthService, public prefs: PreferenceService) {
    Storage.get({ key: 'examSubjData' }).then(res => {
      this.data = JSON.parse(res.value);
    });



  }

  ngOnInit() {
    this.prefs.getUserToken().then(tkn => {
      this.token = tkn.value;
      this.prefs.getExamData().then((exms: any) => {
        this.examData = JSON.parse(exms.value);
        this.getExamQuets(tkn.value, this.data.subId, this.data.examtime * 60)

      })
    });
  }
  getExamQuets(token, subId, timer) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };

    this.api.getData(`/api/Exam/GetExamQARealtimeOneByOne/${this.examData.examEnrolDetail}/${this.examData.candId}/${subId}/1/${timer}`, httpOptions).subscribe((ques: any) => {
      console.log(ques);
      this.exmHeader = ques.examHeader;
      this.quesData = ques.questionAnswerData;
      this.quetsIndexArray = ques.subjectWiseQuestionsAttempted;
      this.getSelectAnswer();
      this.startTimer(timer);
      this.isLoading = false;
    });

  }

  getSelectAnswer() {
    this.quesData.forEach((ansr, idx) => {
      if (ansr.attemptedAnswerFlg == 1) {
        this.selectedAnser = ansr;
      }
      if (this.quesData[0].attemptedAnswerFlg != 1) {
        this.quetsIndexArray[0].isQuestionVisited = 1;
      }
    });
  }
  startTimer(dur: number) {
    this.examTime = dur;
    setInterval(() => {
      this.updateTimeVal();
    }, 1000);
  }

  updateTimeVal() {
    let hours: any = Math.floor(this.examTime / 60 / 60);
    let minutes: any = Math.floor(this.examTime / 60) - (hours * 60);
    let seconds: any = this.examTime % 60;
    const text = hours + ':' + minutes + ':' + seconds;
    this.time.next(text);
    this.examTime--;

    if (this.examTime == 0) {
      this.examSubmission();
      this.navCtrl.pop();
      this.router.navigate(['/home']);
    }
  }
  nextQue(quesNum) {
    if (quesNum == this.data.numberOfQues) {
      return;
    }
    quesNum = quesNum + 1;
    this.submitAnswer(quesNum, 'I', 'queNav');
  }

  prevQue(ques) {
    if (ques == 1) {
      return;
    }
    ques = ques - 1;
    this.submitAnswer(ques, 'I', 'queNav');
  }
  getAnswer(e) {
    this.examAsnwer.qpAttemtedAnswerTableType = e.detail.value.answerID.toString();
  }

  getAnswerCheck(e) {
    const isChecked = e.detail.checked;

    if (isChecked) {
      this.multianswers.push(e.detail.value.answerID);
    } else {
      this.multianswers = this.multianswers.filter(ans => ans != e.detail.value);
    }
    this.examAsnwer.qpAttemtedAnswerTableType = this.multianswers.join();
  }

  submitAnswer(seq, comStatus, navType) {
    this.isLoading = false;

    if (this.examAsnwer.qpAttemtedAnswerTableType == '') {
      this.checkVisit(seq);
      return;
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };

    this.examAsnwer.candidateId = this.examData.candId;
    this.examAsnwer.examEnrollmentDetailsID = this.examData.examEnrolDetail;
    this.examAsnwer.duration = this.examTime;
    this.examAsnwer.questionID = this.quesData[0].questionId;
    this.examAsnwer.quesPaperCriteriaID = this.exmHeader.questionPaperCriteriaID;
    this.examAsnwer.completionStatus = comStatus;
    this.api.postData('/api/Exam/exam/insertexamquestionanswer', this.examAsnwer, httpOptions).subscribe((res: any) => {
      console.log(res);
      if (res.statusCode == 201) {
        this.examAsnwer.qpAttemtedAnswerTableType = '';

        this.getAnswerColor(seq - 1);

        if (navType == 'queNav') {
          this.checkVisit(seq);
        }
        this.isLoading = true;
      }
    });
  }

  submitAnswerGenericFlg(seq, comStatus) {
    this.isLoading = false;
    // if (this.examAsnwer.qpAttemtedAnswerTableType == '') {
    //   this.checkVisit(seq);
    //   return;
    // }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };

    this.examAsnwer.candidateId = this.examData.candId;
    this.examAsnwer.examEnrollmentDetailsID = this.examData.examEnrolDetail;
    this.examAsnwer.duration = this.examTime;
    this.examAsnwer.questionID = this.quesData[0].questionId;
    this.examAsnwer.quesPaperCriteriaID = this.exmHeader.questionPaperCriteriaID;
    this.examAsnwer.completionStatus = comStatus;
    this.api.postData('/api/Exam/exam/insertexamquestionanswer', this.examAsnwer, httpOptions).subscribe((res: any) => {
      console.log(res);
      if (res.statusCode == 201) {
        this.examAsnwer.qpAttemtedAnswerTableType = '';
        this.getAnswerColor(seq);
        this.isLoading = true;

        location.reload();
        this.router.navigate(['/home']);
      }
    });
  }

  // switchQue(qNum) {
  //   // this.checkVisit(index, false);
  //   this.switchQues(qNum);
  // }

  checkVisit(queSeq) {
    this.quetsIndexArray.map((val, idx) => {
      if (val.questionSequence === queSeq) {
        this.switchQues(queSeq);
        val.isQuestionVisited = 1;

      }

    });
  }
  getAnswerColor(queSeq) {
    this.quetsIndexArray.map((val, idx) => {
      if (val.questionSequence === queSeq) {
        this.switchQues(queSeq);
        val.isAttempted = 1;
      }

    });
  }
  switchQues(quesNum) {
    this.isLoading = true;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token
      })
    };

    this.api.getData(`/api/Exam/GetExamQARealtimeOneByOne/${this.examData.examEnrolDetail}/${this.examData.candId}/${this.data.subId}/${quesNum}/${this.examTime}`, httpOptions).subscribe((ques: any) => {
      console.log(ques);
      this.quesData = ques.questionAnswerData;
      this.getSelectAnswer();
      this.isLoading = false;

    }, (error) => {
      console.log(error);
    });
  }

  async submitRes() {
    const alert = await this.alertController.create({

      header: 'Confirm!',
      message: 'Please ensure you have attempted all questions before submit',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.examSubmission();
          }
        }
      ]
    });

    await alert.present();


  }


  examSubmission() {
    const id = this.examData.qpResultId;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };

    this.examAsnwer.candidateId = this.examData.candId;
    this.examAsnwer.examEnrollmentDetailsID = this.examData.examEnrolDetail;
    this.examAsnwer.duration = this.examTime;
    this.examAsnwer.questionID = this.quesData[0].questionId;
    this.examAsnwer.quesPaperCriteriaID = this.exmHeader.questionPaperCriteriaID;
    this.examAsnwer.completionStatus = 'C';
    console.log(this.examAsnwer);
    // this.checkVisit(seq - 1, true);

    this.api.postData('/api/Exam/exam/insertexamquestionanswer', this.examAsnwer, httpOptions).subscribe((res: any) => {
      console.log(res);
      if (res.statusCode == 201) {
        this.examAsnwer.qpAttemtedAnswerTableType = '';
        this.router.navigate(['/exam-result', id]);
      }

    });

  }

}
