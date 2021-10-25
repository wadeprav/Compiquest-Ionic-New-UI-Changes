import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController, MenuController, ModalController, NavController, ToastController } from '@ionic/angular';
import { PreferenceService } from 'src/app/services/preference.service';
import { SubscriptionsComponent } from 'src/app/components/subscriptions/subscriptions.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userForm: FormGroup;
  isLoading = false;
  constructor(private fb: FormBuilder, private toastController: ToastController, private modalCtrl: ModalController, private menuCtrl: MenuController, private alertControler: AlertController, private auth: AuthService, private router: Router, private navCtrl: NavController, private prefs: PreferenceService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  login() {
    this.isLoading = true;
    const user = {
      username: this.userForm.value.username,
      password: this.userForm.value.password
    }

    this.auth.login(user).subscribe((res: any) => {
      console.log(res);

      if (res.result !== false) {
        if (res.roles[0].subscriptionStatus === 0) {
          // this.presentToast();
          // this.openSubscriptions();
          this.presentAlert('Subscriptions Not Active, Please contact compiquest Admin.');
          } else {
          this.prefs.storeUser(res.roles[0]);
          this.userForm.reset();
          this.prefs.storeUserToken(res.token);
          this.isLoading = false;
          this.router.navigate(['/home']);
        }
      } else {
        this.isLoading = false;
        this.presentAlert(res.message);
      }

    }, (error) => {
      this.isLoading = false;
      // console.log(error);
    });

  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'subscription not valid',
      duration: 2000
    });
    toast.present();
  }
  gotoRegistration() {
    this.navCtrl.navigateForward('/registration');
  }

  openSubscriptions() {
    this.modalCtrl.create({
      component: SubscriptionsComponent
    }).then(modal => modal.present());
  }

  presentAlert(msg) {
    this.alertControler.create({
      header: 'Error',
      message: msg,
      buttons: ['OK']
    }).then(aler => aler.present());
  }
}
