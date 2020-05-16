import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTestComponent } from './add-Test/add-Test.component';
import{RemoveTestComponent} from './remove-test/remove-test.component'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CentresComponent } from './centres/centres.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTestComponent,
    CentresComponent,
   RemoveTestComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
