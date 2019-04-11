import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { WheelSelector } from '@ionic-native/wheel-selector/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DisplayEventModule } from './display-event/display-event.module';
import { DisplayEventFeedsPage } from './Pages/display-event-feeds/display-event-feeds.page';
import { DisplayEventFeedsPageModule } from './Pages/display-event-feeds/display-event-feeds.module'
import { CommonModule } from '@angular/common';

import { SportsPage } from './Pages/sports/sports.page';
import { ChurchPage } from './Pages/church/church.page';

import { SportsPageModule } from './Pages/sports/sports.module';
import { ChurchPageModule } from './Pages/church/church.module';
import { EducarePageModule } from './Pages/educare/educare.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    DisplayEventModule,
    CommonModule,
    SportsPageModule,
    ChurchPageModule,
    EducarePageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VideoPlayer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    WheelSelector
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
