import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule }        from './app-routing.module';
import { AppService } from './app.service';

import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardService } from './dashboard/dashboard.service';
import { CmaterialModule } from './cmaterial/cmaterial.module'



const config = {
  apiKey: "AIzaSyB8jM7czKjRXgh1agOAFwtZ8AvQOsgnpxs",
  authDomain: "winterfell-5a23a.firebaseapp.com",
  databaseURL: "https://winterfell-5a23a.firebaseio.com",
  projectId: "winterfell-5a23a",
  storageBucket: "winterfell-5a23a.appspot.com",
  messagingSenderId: "1028967448833"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DashboardModule,
    CmaterialModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AppService,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
