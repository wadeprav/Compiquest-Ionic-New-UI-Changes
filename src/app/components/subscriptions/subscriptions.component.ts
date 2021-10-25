import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss'],
})
export class SubscriptionsComponent implements OnInit {
  subsResp = {
    annualFee: 0,
    totalDiscountAmt: 0,
    cgst: 0,
    sgst: 0,
  };
  totalSubs = [];
  isLoading = false;
  allSubscriptions = [];
  constructor(private mdl: ModalController, private api: AuthService) { }

  ngOnInit() {
    this.getAllSubscription();
  }


  closeModal() {
    this.mdl.dismiss();
  }


  getAllSubscription() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    this.api.getData('/api/Subscription/GetExamSubscriptionByID/0', httpOptions).subscribe((res: any) => {
      this.allSubscriptions = res.subscriptionDetails;
      console.log(res);
    });
  }
  getSubscription(e) {

    this.isLoading = true;
    if (e.detail.checked) {
      const subs = e.detail.value;
      this.totalSubs.push(subs);

      this.subsResp.annualFee = this.subsResp.annualFee + subs.annualFee;
      this.subsResp.totalDiscountAmt = this.subsResp.totalDiscountAmt + subs.totalDiscountAmt;
      this.subsResp.cgst = this.subsResp.cgst + subs.cgst;
      this.subsResp.sgst = this.subsResp.sgst + subs.sgst;

      this.isLoading = false;

    } else {
      this.totalSubs.find(sub => {
        if (sub.examSubscriptionId == e.detail.value.examSubscriptionId) {
          this.subsResp.annualFee = this.subsResp.annualFee - sub.annualFee;
          this.subsResp.totalDiscountAmt = this.subsResp.totalDiscountAmt - sub.totalDiscountAmt;
          this.subsResp.cgst = this.subsResp.cgst - sub.cgst;
          this.subsResp.sgst = this.subsResp.sgst - sub.sgst;
        }
      });
      this.isLoading = false;
    }

  }
  round(value) {
    return Math.round(value);
  }
}
