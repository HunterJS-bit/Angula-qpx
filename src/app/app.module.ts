import { QpxService } from './qpx.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';


const appRoutes =[
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search/:origin/:destionation/:date',
    component: SearchComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultsComponent,
    TopnavComponent,
    FooterComponent,
    SearchComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [QpxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
