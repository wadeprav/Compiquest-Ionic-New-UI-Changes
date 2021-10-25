import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { PreferenceService } from './services/preference.service';

const AUTH_TOKEN = 'token';

const USER_DATA = 'userData';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  listingpages = [];
  userData: any;
  constructor(public navCtrl: NavController, public pref: PreferenceService) {
    this.checkLoginStatus();

  }

  checkLoginStatus() {
    this.pref.getUserTokenObs().subscribe(resp => {
      console.log(resp);
      if (resp) {
        this.navCtrl.navigateRoot(['/home']);
      } else {
        this.navCtrl.navigateRoot(['/login']);
      }
    });
    this.pref.getUser().subscribe((res: any) => {
      this.userData = JSON.parse(res);
    });
  }

  logout = async () => {
    await Storage.remove({ key: AUTH_TOKEN });
    await Storage.remove({ key: USER_DATA });
    this.navCtrl.navigateRoot(['/login']);
  };
}


