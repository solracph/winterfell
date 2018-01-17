import { Router, RoutesRecognized  } from '@angular/router';
import { Component } from '@angular/core';
import { AppService } from './app.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title;
  private url

  constructor( private router: Router,private appService : AppService) {} 
   
  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.title = data.state.root.firstChild.data["title"];
        this.url = data.url;
      }
    });
  }
}
