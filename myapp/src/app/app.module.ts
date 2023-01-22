// נוסיף התקנה
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavBarComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //וגם גאן
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
