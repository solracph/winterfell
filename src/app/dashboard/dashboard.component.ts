import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { DashboardService } from './dashboard.service'
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: Observable<AngularFireAction<any>[]>;

  constructor(private service: DashboardService){
    this.items = this.service.getItems();
  }
  
  ngOnInit() {
  }
}
