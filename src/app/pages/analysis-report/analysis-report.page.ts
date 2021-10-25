import { AfterViewInit, Component } from '@angular/core';
import { FetchApiDataService } from './fetch-api-data.service';
import { ChartOptions, ChartType } from 'chart.js';
// import { randomInt } from 'crypto';
import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-analysis-report',
  templateUrl: './analysis-report.page.html',
  styleUrls: ['./analysis-report.page.scss'],
})
export class AnalysisReportPage implements AfterViewInit {
  title = 'ng2-charts-client';
  public chartOptions: ChartOptions = {
    responsive: true,
    legend: {
      
      display: true,
      fullWidth: true,
      labels: {
        fontSize: 18,
        
      }
    }
  };
  public doughnutChartLabels: Label[] = ['Correct', 'Incorrect', 'Unattempt'];
  
  public doughnutChartData: MultiDataSet = [];
  public labelList: any = [];
  public labelListID: any = [];
  public labelDataBySubject: any = [];


  public labelData: any = [];
  public labelDatas: any = [];
  public setArray: any = [];
  public doughnutChartType: ChartType = 'doughnut';


  constructor(private apiData: FetchApiDataService) { }
  onnginit() { }
  ngAfterViewInit() {
    // API DATA 
    this.apiData.getData().subscribe((data: any) => {
      console.log(data);



      data['analysisSummary'].forEach((element: any) => {


        if (this.labelList.length == 0) {
          var dL = {
            label: element['examName'],
            id: element['examTypeId']
          }
          this.labelList.push(element['examName']);
          this.labelListID.push(dL);

          var d = {
            label: element['examName'],
            data: [element['qCount']]
          }
          this.labelData.push(d);

        }
        else {
          if (this.checkLables(element['examName']) == false) {

            var dL = {
              label: element['examName'],
              id: element['examTypeId']
            }
            this.labelList.push(element['examName']);
            this.labelListID.push(dL);

            var d = {
              label: element['examName'],
              data: [element['qCount']]
            }
            this.labelData.push(d);
          }
          else {

            if (this.checkLableForData(element['examName']) == true) {
              for (let index = 0; index < this.labelData.length; index++) {

                if (this.labelData[index]['label'] == element['examName']) {
                  this.labelData[index]['data'].push(element['qCount']);
                }

              }


            }
          }
        }


      });

      this.labelData.forEach((element: any) => {

        this.labelDatas.push(element.data);
      });




      this.chartBySubject(data);



    })


  }
  public checkLables(label: string) {
    let check = false;
    this.labelList.forEach((element: string) => {
      if (element == label) {
        return check = true;
      }
      else {
        return check;
      }

    });
    return check;

  }
  public checkLableForData(label: string) {
    let check = false;
    this.labelData.forEach((element: any) => {

      if (element['label'] == label) {
        return check = true;
      }
      else {
        return check;
      }

    });
    return check;

  }
  public checkLableForDataSub(id: any, subject: any) {
    let check = false;
    this.labelDataBySubject.forEach((element: any) => {

      if (element['id'] == id && element['subject'] == subject) {
        return check = true;
      }
      else {
        return check;
      }

    });
    return check;

  }
  chartBySubject(data: any) {
    data['analysisBySubject'].forEach((e: any) => {
      if (this.labelDataBySubject.length == 0) {

        var d = {
          id: e['examTypeId'],
          subject: e['subjectName'],
          data: [e['qCount']]
        }
        this.labelDataBySubject.push(d);
      }



      else {
        if (this.checkLableForDataSub(e['examTypeId'], e['subjectName']) == true) {
          console.log('else part');
          for (let index = 0; index < this.labelDataBySubject.length; index++) {

            if (this.labelDataBySubject[index]['id'] == e['examTypeId'] && this.labelDataBySubject[index]['subject'] == e['subjectName']) {
              this.labelDataBySubject[index]['data'].push(e['qCount']);
            }

          }


        }
        if (this.checkLableForDataSub(e['examTypeId'], e['subjectName']) == false) {
          var d = {
            id: e['examTypeId'],
            subject: e['subjectName'],
            data: [e['qCount']]
          }
          this.labelDataBySubject.push(d);


        }
      }




    });

    this.plotchart();
  }

  plotchart() {
    this.labelDataBySubject.forEach((element: any) => {

      if (this.setArray.lenght == 0) {
        var d = {
          subject: element.subject,
          data: element.data
        }

        var makeSets = {

          'examType': element.id,
          data: [d]




        }
        this.setArray.push(makeSets);
      }
      else {

        if (this.uniqueSetDatacheck(element.id) == true) {
          for (let index = 0; index < this.setArray.length; index++) {
            if (this.setArray[index]['examType'] == element.id) {
              console.log('indssie');
              var d = {
                subject: element.subject,
                data: element.data
              }
              this.setArray[index]['data'].push(d);

            }

          }
        }
        if (this.uniqueSetDatacheck(element.id) == false) {
          var d = {
            subject: element.subject,
            data: element.data
          }

          var makeSetas = {

            'examType': element.id,
            data: [d]




          }
          this.setArray.push(makeSetas);
        }

      }





    });


  }

  uniqueSetDatacheck(data: any) {
    let check = false;
    this.setArray.forEach((e: any) => {
      if (e.examType == data) {
        return check = true;
      }
      else {
        return check;
      }

    });
    return check;


  }

}
