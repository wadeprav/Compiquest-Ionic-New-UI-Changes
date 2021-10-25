import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {

  private url = 'https://api.compiquest.com:8443/api/AnalysisReport/AnalysisReport/AnalysisSummaryReport?CandidateID=7';

constructor(private http: HttpClient) { }

getData() {
	return this.http.get(this.url);
}
}
