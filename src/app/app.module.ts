import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HealthCareAdminService } from './health-care-admin.service';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTestComponent } from './add-test/add-test.component';
import { RemoveTestComponent } from './remove-test/remove-test.component';



@NgModule({
  declarations: [
    AppComponent,
  

    AddTestComponent,
    RemoveTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HealthCareAdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
