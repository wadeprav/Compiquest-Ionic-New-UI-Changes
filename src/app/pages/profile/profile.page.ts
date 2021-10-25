import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { PreferenceService } from 'src/app/services/preference.service';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  regForm: FormGroup;
  userData: any;
  submitAttempt = false;
  genderVal: any;
  repeatr: any;
  stateArray = [];
  userRes: any;
  stateInd: any;
  userProfile = {
    candidateID: 0,
    fName: '',
    mName: '',
    lName: '',
    address: '',
    city: '',
    adharCardNo: '',
    dateOfBirth: '',
    mobile: '',
    gender: '',
    photo: '',
    emailID: '',
    collegeName: '',
    class: '',
    stateId: '',
    instituteId: '',
    active: true,
    createdDate: '',
    modifiedDate: '',
    createdBy: '',
    updatedBy: '',
    repeaterFlag: true,
    parentFName: '',
    parentMName: '',
    parentLName: '',
    parentEmailID: '',
    parentMobile: '',
    vendorId: 0
  };
  date = new Date("2011-07-14 11:23:00".replace(/-/g, "/"));

  constructor(private fb: FormBuilder, private navctrl: NavController, private loadingController: LoadingController, public api: AuthService, public prefs: PreferenceService, public router: Router) { }

  ngOnInit() {
    this.prefs.getUser().subscribe(user => {
      this.userData = JSON.parse(user);
      console.log(this.userData);
    });
    this.regForm = this.fb.group({
      fullname: new FormControl(null, {
        updateOn: 'blur',
        validators: []
      }),
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
      adharCardNo: new FormControl(null, {
        updateOn: 'blur',
        validators: []
      }),
      emailID: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.maxLength(30), Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'), Validators.required]
      }),
      mobile: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      parentFName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.maxLength(30), Validators.pattern('^[a-zA-Z \-\']+'), Validators.required]
      }),
      parentMName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.maxLength(30), Validators.pattern('^[a-zA-Z \-\']+'), Validators.required]
      }),
      parentLName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.maxLength(30), Validators.pattern('^[a-zA-Z \-\']+'), Validators.required]
      }),
      parentMobile: ['', Validators.required],
      parentEmailID: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.maxLength(30), Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'), Validators.required]
      }),
      address: new FormControl(null, {
        updateOn: 'blur',
        validators: []
      }),
      instituteId: new FormControl(null, {
        updateOn: 'blur',
        validators: []
      }),
      city: new FormControl(null, {
        updateOn: 'blur',
        validators: []
      }),
      stateId: new FormControl(null, {
        updateOn: 'blur',
        validators: []
      }),
      photo: new FormControl(null, {
        updateOn: 'blur',
        validators: []
      }),
      collegeName: new FormControl(null, {
        updateOn: 'blur',
        validators: []
      }),
      class: new FormControl(null, {
        updateOn: 'blur',
        validators: []
      }),
    });
    this.prefs.getUserToken().then(resp => {
      this.getUserAllData(resp.value, this.userData.candidateID);
    });
  }

  getUserAllData(tokenData, userID) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + tokenData
      })
    };
    const httpOptionsst = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.api.getData(`/api/Candidate/Candidate/GetCandidateProfile/${userID}`, httpOptions).subscribe((userPro: any) => {
      this.userRes = userPro;
      this.api.getData(`/api/Candidate/GetState/${userPro.stateId}`, httpOptionsst).subscribe((state: any) => {
        this.stateArray = state;
        console.log(state);
      });
      this.regForm.patchValue({
        address: userPro.address,
        firstname: userPro.fName,
        adharCardNo: userPro.adharCardNo,
        city: userPro.city,
        class: userPro.class,
        collegeName: userPro.collegeName,
        createdDate: userPro.createdDate,
        dateOfBirth: userPro.dateOfBirth,
        emailID: userPro.emailID,

        lastname: userPro.lName,
        middlename: userPro.mName,
        mobile: userPro.mobile,
        fullname: userPro.fName + ' ' + userPro.lName,
        modifiedDate: userPro.modifiedDate,
        parentEmailID: userPro.parentEmailID,
        parentFName: userPro.parentFName,
        parentLName: userPro.parentLName,
        parentMName: userPro.parentMName,
        parentMobile: userPro.parentMobile,
        photo: userPro.photo,


      });
      if (userPro.instituteId == 0) {
        this.regForm.patchValue({
          instituteId: '',
        });
      }
      this.genderVal = userPro.gender;
      console.log(userPro);
      this.repeatr = userPro.repeaterFlag;
    });
  }

  updateUserProfile() {
    this.presentLoading();
    const httpOptionsst = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.userProfile.fName = this.regForm.value.firstname;
    this.userProfile.lName = this.regForm.value.lastname;
    this.userProfile.candidateID = this.userData.candidateID;
    this.userProfile.mName = this.regForm.value.middlename;
    this.userProfile.address = this.regForm.value.address;
    this.userProfile.city = this.regForm.value.city;
    this.userProfile.adharCardNo = this.regForm.value.adharCardNo;

    this.userProfile.dateOfBirth = this.regForm.value.dateOfBirth;
    this.userProfile.mobile = this.regForm.value.mobile;
    this.userProfile.photo = this.regForm.value.photo;
    this.userProfile.emailID = this.regForm.value.emailID;
    this.userProfile.collegeName = this.regForm.value.collegeName;
    this.userProfile.stateId = this.userRes.stateId;
    this.userProfile.instituteId = this.regForm.value.instituteId;
    this.userProfile.active = this.userRes.active;
    this.userProfile.createdDate = this.userRes.createdDate;
    this.userProfile.modifiedDate = this.date.toString();
    this.userProfile.createdBy = this.regForm.value.fullname;
    this.userProfile.updatedBy = this.regForm.value.fullname;
    this.userProfile.parentFName = this.regForm.value.parentFName;
    this.userProfile.parentMName = this.regForm.value.parentMName;
    this.userProfile.parentLName = this.regForm.value.parentLName;
    this.userProfile.parentEmailID = this.regForm.value.parentEmailID;
    this.userProfile.parentMobile = this.regForm.value.parentMobile;
    this.userProfile.vendorId = this.userRes.vendorId;
    console.log(this.userProfile);
    this.api.postData('/api/Candidate/Candidate/UpdateCandidateProfile', this.userProfile, httpOptionsst).subscribe((userProfRes) => {
      console.log(userProfRes);
      this.loadingController.dismiss();
    });


  }
  getGender(e) {
    this.userProfile.gender = e.detail.value;
  }

  getState(e) {

    this.regForm.patchValue({
      stateId: e.detail.value
    });

  }
  getRepetr(e) {
    this.userProfile.repeaterFlag = e.detail.value;
  }

  getClass(e) {

  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Updating Profile...',
      duration: 2000
    });
    await loading.present();
    console.log('Loading dismissed!');
  }

  getSelectedState(id) {
    this.stateArray.forEach((el, ind) => {
      if (el.stateID == id) {
        this.stateInd = ind;
      }
    });
    return this.stateInd;
  }

  Cancel() {
    //location.reload();
    this.router.navigate(['/home']);
  }
}
