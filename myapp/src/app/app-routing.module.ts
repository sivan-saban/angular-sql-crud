import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const routes: Routes = [
  {path:"add", component:AddComponent},
  {path:"list", component:ListComponent},
  {path:"nav-bar", component:NavBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
