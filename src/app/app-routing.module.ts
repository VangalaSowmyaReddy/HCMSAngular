import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTestComponent } from './add-Test/add-Test.component';
import {RemoveTestComponent} from './remove-test/remove-test.component'
import { CentresComponent } from './centres/centres.component';




const routes: Routes = [
  {path:'',component:CentresComponent},
  { path:'addTest', component: AddTestComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
