import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MichaelComponent } from './michael/michael.component';
import { NatalieComponent } from './natalie/natalie.component';

const routes: Routes = [
  {path:'', component: NatalieComponent},
  {path:'michael', component: MichaelComponent},
  {path:'natalie', component: NatalieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
