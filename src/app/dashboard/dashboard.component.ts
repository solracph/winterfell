import { Component, OnInit} from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { DashboardService } from './dashboard.service'
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    
 
  seriesClick(e: any){
    console.log(e.dataItem.id)
  }

  

  public events: string[] = [];
  public series2;
  public series: Series = 
    {
        reports:
        [{
            id: 1,
            serie:
                [{
                    name: 'Center',
                    color: '#689f38',
                    type: 'line',
                    data: [{id:1, value: 1.3164}, {id:2, value: 98.0392}, {id:3, value: 63.6892},{id:4, value: 66.9572} , {id:5, value: 56.8627},{id:6, value: 3.939} ]
                },{
                    name: 'Mean',
                    color: '#0288d1',
                    type: 'bar',
                    data: [{id:1, value: 57.4047}, {id:2, value: 56.8627}, {id:3, value: 3.994},{id:4, value: 3.464} , {id:5, value: 4.001},{id:6, value: 3.939} ]
                }, {
                    name: 'Goal',
                    color: '#fbc02d',
                    type: 'bar',
                    data: [{id:1, value: 1.0000}, {id:2, value: 1.0000}, {id:3, value: 1.0000},{id:4, value: 1.0000} , {id:5, value: 1.0000},{id:6, value: 1.0000} ]
                }]
        }
        ,{
            id: 2,
            serie:
                [{
                    name: 'Center',
                    color: '#689f38',
                    type: 'line',
                    data: [{id:1, value: 1.3164}, {id:2, value: 98.0392}, {id:3, value: 53.6892},{id:4, value: 67.9572} , {id:5, value: 59.8627},{id:6, value: 3.939} ]
                },{
                    name: 'Mean',
                    color: '#0288d1',
                    type: 'bar',
                    data: [{id:1, value: 36.4047}, {id:2, value: 56.8627}, {id:3, value: 5.994},{id:4, value: 2.464} , {id:5, value: 4.001},{id:6, value: 3.939} ]
                }, {
                    name: 'Goal',
                    color: '#fbc02d',
                    type: 'bar',
                    data: [{id:1, value: 1.0000}, {id:2, value: 4.0000}, {id:3, value: 1.0000},{id:4, value: 6.0000} , {id:5, value: 1.0000},{id:6, value: 1.0000} ]
                }]
        }]
    }

    public valueAxis: any = {
        labels: {
            format: '#.00'
        }
    };

    public categories: string[] = ["HC5.1", "HC6.1", "HC7.1", "HC7.2", "HC8.1", "HC8.2"];
  
    dragOperation: boolean = false;

    containers: Array<Container> = [
        new Container(1, 'Container 1', [new Widget(1,'1','6',[],["HC5.1", "HC6.1", "HC7.1", "HC7.2", "HC8.1", "HC8.2"]) ,new Widget(2,'2','6',[],["HC5.1", "HC6.1", "HC7.1", "HC7.2", "HC8.1", "HC8.2"])]),
        new Container(2, 'Container 2', []),
        new Container(3, 'Container 3', [new Widget(5,'5','6',[],["HC5.1", "HC6.1", "HC7.1", "HC7.2", "HC8.1", "HC8.2"]), new Widget(6,'6','6',[],["HC5.1", "HC6.1", "HC7.1", "HC7.2", "HC8.1", "HC8.2"])])
    ];

  items: Observable<AngularFireAction<any>[]>;

    getwidgetSeries(id:number): Promise<any>{
        var serie;
        this.series.reports.forEach(
            report =>{
                if(report.id == id)
                {
                    serie = report.serie;
                }
            }
        );

        return Promise.resolve(serie);
    }

    constructor(private service: DashboardService){
        
    }

  ngOnInit() {
    this.containers.forEach(
        container => {
            container.widgets.forEach(
                widget => {
                    this.getwidgetSeries(widget.id).then(data => {
                        widget.data = data;
                        widget.categories = widget.categories;
                    })
                }
            )
        }
     )
  }
}

interface Series {
    reports: Array<WidgetReport>
}

interface WidgetReport {
    id : number,
    serie : Array<SerieConfiguration>
}

interface SerieConfiguration{
    name: string,
    color: string,
    type: string,
    data: Array<SerieData>
}

interface SerieData{
    id:number, 
    value: number
}

class Container {
  constructor(public id: number, public name: string, public widgets: Array<Widget>) {}
}

class Widget {
  constructor(public id: number,public name: string, public width: string, public data: any,public categories: any) {
    
  }
}
