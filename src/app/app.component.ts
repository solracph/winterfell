
import { Router, RoutesRecognized  } from '@angular/router';
import { Component,ViewChild ,ElementRef,Renderer2} from '@angular/core';
import { AppService } from './app.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('someVar') el : ElementRef;
  
  private title;
  private url;
  private drawerOpened;

  constructor( private router: Router,private appService : AppService) {
    this.drawerOpened = true;
  } 

  drawerToggle(drawer : any){
    drawer.toggle();
    if(this.el.nativeElement.style.width == "100%") {
      this.el.nativeElement.style.width = "80%"
    }else {
      this.el.nativeElement.style.width = "100%"
    }
  }
  
  
  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.title = data.state.root.firstChild.data["title"];
        this.url = data.url;
      }
    });
  }
}
