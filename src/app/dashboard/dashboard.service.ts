import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashboardService {

  constructor(private db: AngularFireDatabase) { }

  getItems(): Observable<AngularFireAction<any>[]>{
    return this.db.list('/items').snapshotChanges();
  }

}
