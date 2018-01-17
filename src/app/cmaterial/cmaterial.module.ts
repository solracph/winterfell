import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,  MatIconModule,MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatIconModule,MatSidenavModule,BrowserAnimationsModule],
  exports: [MatButtonModule, MatCheckboxModule,MatIconModule,MatSidenavModule,BrowserAnimationsModule],
})
export class CmaterialModule { }
