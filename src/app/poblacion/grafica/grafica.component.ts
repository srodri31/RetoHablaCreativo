import { Component , Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  @Input() lugar;
  @Output() onGoBack: EventEmitter<any> = new EventEmitter();

 // lineChart
  public lineChartData:Array<any>;
  public lineChartLabels:Array<any> = ['2005', '2006', '2007', '2008', '2009', '2010',
    '2011', '2012', '2013', '2014', '2015'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  ngOnInit(){
    this.lineChartData = this.dataToChart(this.lugar);
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  dataToChart(lugar){
    var data = [];
    data.push(Number(lugar.year2005));
    data.push(Number(lugar.year2006));
    data.push(Number(lugar.year2007));
    data.push(Number(lugar.year2008));
    data.push(Number(lugar.year2009));
    data.push(Number(lugar.year2010));
    data.push(Number(lugar.year2011));
    data.push(Number(lugar.year2012));
    data.push(Number(lugar.year2013));
    data.push(Number(lugar.year2014));
    data.push(Number(lugar.year2015));

    var lineChartData = [
      {data: data, label: lugar.ComunaCorregimiento}
    ];

    return lineChartData;
  }

  regresar(){
    this.onGoBack.emit();
  }
}
