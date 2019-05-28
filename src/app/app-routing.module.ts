import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BodyoneComponent} from "./bodyone/bodyone.component";
import {BodytwoComponent} from "./bodytwo/bodytwo.component";
import { BodythreeComponent} from "./bodythree/bodythree.component";

const appRoutes: Routes = [
  {path:'' , redirectTo:'/bodyone' , pathMatch:'full'},
  {path:'bodyone', component: BodyoneComponent},
  {path:'bodytwo', component: BodytwoComponent},
  {path:'bodythree', component:BodythreeComponent},

];
@NgModule({

  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})

export class AppRoutingModule {

}
