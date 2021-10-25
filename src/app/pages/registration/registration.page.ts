import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import * as moment from 'moment';
import { HttpHeaders } from '@angular/common/http';
import { PreferenceService } from 'src/app/services/preference.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  regForm: FormGroup;
  isLoading = false;
  isEmailAvail: any;
  isEmailMobile: any;
  dob: any;
  token: any;
  submitAttempt = false;
  constructor(private fb: FormBuilder, private navCtrl: NavController, private auth: AuthService, private alertController: AlertController, private prefs: PreferenceService) { }

  ngOnInit() {
    this.prefs.getUserToken().then(resp => {
     this.token = resp.value;
    });
    this.regForm = this.fb.group({
      firstname: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.maxLength(30), Validators.pattern('^[a-zA-Z \-\']+'), Validators.required]
      }),
      middlename: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.maxLength(30), Validators.pattern('^[a-zA-Z \-\']+'), Validators.required]
      }),
      lastname: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.maxLength(30), Validators.pattern('^[a-zA-Z \-\']+'), Validators.required]
      }),
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.maxLength(30), Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'), Validators.required]
      }),
      mobile: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      parentfirstname: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.maxLength(30), Validators.pattern('^[a-zA-Z \-\']+'), Validators.required]
      }),
      parentmiddlename: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.maxLength(30), Validators.pattern('^[a-zA-Z \-\']+'), Validators.required]
      }),
      parentlastname: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.maxLength(30), Validators.pattern('^[a-zA-Z \-\']+'), Validators.required]
      }),
      parentmobilenumber: ['', Validators.required],
      parentEmail: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.maxLength(30), Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'), Validators.required]
      }),
    });
  }

  submitCandidate() {

    this.isLoading = true;
    this.submitAttempt = true;
    console.log(this.regForm);
    const candidate = {
      fName: this.regForm.value.firstname,
      mName: this.regForm.value.middlename,
      lName: this.regForm.value.lastname,
      // dateOfBirth: moment(this.regForm.value.dateOfBirth).format('YYYY-MM-DD'),
      dateOfBirth: this.regForm.value.dateOfBirth,
      mobile: this.regForm.value.mobile,
      emailId: this.regForm.value.email,
      parentFName: this.regForm.value.parentfirstname,
      parentMName: this.regForm.value.parentmiddlename,
      parentLName: this.regForm.value.parentlastname,
      parentMobile: this.regForm.value.parentmobilenumber,
      parentEmailId: this.regForm.value.parentEmail

    }

    console.log(candidate);

    this.auth.registerCandidate(candidate).subscribe(resp => {
      // this.regForm.reset();
      this.isLoading = false;
      this.showConfirm(resp);
      console.log(resp)
    }, (error) => {
      this.isLoading = false;
      console.log(error);
    }
    );
  }

  async showConfirm(msg) {
    const alert = await this.alertController.create({
      header: 'Message',
      message: JSON.stringify(msg.value),
      buttons: [
        {
          text: 'Try Again',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {

          text: 'Okay',
          handler: () => {
            if (msg.value === 'Candidate Registered Successfully') {
              this.navCtrl.navigateRoot('/home')
            } else {
              this.navCtrl.pop();
            }

          }
        }
      ]
    });

    await alert.present();
  }

  cancelBtn() {
    this.navCtrl.pop();
  }

  checkEmail(email) {
    const em = email.detail.value;
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Authorization': 'Bearer ' + this.token
        'Content-Type': 'application/json'
      })
    };
    this.auth.getData(`/api/Candidate/Candidate/CheckCandidateEmailAlreadyExists/${em}`, httpOptions).subscribe(res => {
      this.isEmailAvail = res;
    });
  }
  checkMobile(phone) {
    const em = phone.detail.value;
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Authorization': 'Bearer ' + this.token
        'Content-Type': 'application/json'
      })
    };
    this.auth.getData(`/api/Candidate/Candidate/CheckCandidateMobileAlreadyExists/${em.toString()}`, httpOptions).subscribe(res => {
      console.log(res);
      this.isEmailAvail = res;
    });
  }
}
