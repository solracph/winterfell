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
    
  onItemDrop(e: any) {
    this.dashboard.push(e.dragData)

    for(var item in this.dashboard){
      
    }
  }

  public events: string[] = [];
  public series: any[] = [{
          name: 'India',
          data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
      }, {
          name: 'Russian Federation',
          data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
      }, {
          name: 'Germany',
          data: [0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995]
      }, {
          name: 'World',
          data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
      }];

  public categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
  
  public dashboard = [{
        id:1,
        name: 'India',
        col: [{ id:1, name: "Col 1" },{id:2, name: "Col 2" },{id:3, name: "Col 3" }]
    }, {
        id:2,
        name: 'Russian Federation',
        col: [{id:4, name: "Col 4" },{id:5, name: "Col 5" },{id:6, name: "Col 6" }]
    }, {
        id:3,
        name: 'Germany',
        col: [{id:7, name: "Col 7" }]
    }, {
        id:4,
        name: 'World',
        col: [{id:8, name: "Col 8" }]
    }];

    dragOperation: boolean = false;

    containers: Array<Container> = [
        new Container(1, 'Container 1', [new Widget('1','6'), new Widget('2','6')]),
        new Container(2, 'Container 2', [new Widget('3','6'), new Widget('4','6')]),
        new Container(3, 'Container 3', [new Widget('5','6'), new Widget('6','6')])
    ];

  items: Observable<AngularFireAction<any>[]>;

  constructor(private service: DashboardService){
    this.items = this.service.getItems();
  }

  ngOnInit() {
  }
}


class Container {
  constructor(public id: number, public name: string, public widgets: Array<Widget>) {}
}

class Widget {
  constructor(public name: string, public width: string) {}
}
