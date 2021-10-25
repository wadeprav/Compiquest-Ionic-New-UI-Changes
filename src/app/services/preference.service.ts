import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { BehaviorSubject, Observable } from 'rxjs';

const AUTH_TOKEN = 'token';
const USER_DATA = 'userData';
const EXAM_DATA = 'examData';
@Injectable({
  providedIn: 'root'
})
export class PreferenceService {
  private user = new BehaviorSubject(null);
  private token = new BehaviorSubject(null);;
  constructor() {
    Storage.get({ key: USER_DATA }).then(res => {
      this.user.next(res.value);
    });
    Storage.get({ key: AUTH_TOKEN }).then(tok => {
      this.token.next(tok.value);
    });
  }



  storeUser(user) {
    Storage.set({ key: USER_DATA, value: JSON.stringify(user) });
    this.user.next(JSON.stringify(user));
  }

  getUser(): Observable<any> {
    return this.user.asObservable();
  }

  storeUserToken(token) {
    Storage.set({ key: AUTH_TOKEN, value: token });
    this.token.next(token);
  }

  getUserToken() {
    return Storage.get({ key: AUTH_TOKEN });
  }
  getUserTokenObs(): Observable<any> {
    return this.token.asObservable();
  }
  setExamData(exmData) {
    Storage.set({ key: EXAM_DATA, value: JSON.stringify(exmData) });
  }

  getExamData() {
    return Storage.get({ key: EXAM_DATA });
  }


}
