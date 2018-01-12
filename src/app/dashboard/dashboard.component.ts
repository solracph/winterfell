import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: Observable<AngularFireAction<any>[]>;
  size$: BehaviorSubject<string|null>;
  private title;

  constructor(db: AngularFireDatabase,private route : ActivatedRoute){
    this.items = db.list('/items').snapshotChanges();
  }
  
   ngOnInit() {
     this.title = this.route.snapshot.data.title;
  }
}
