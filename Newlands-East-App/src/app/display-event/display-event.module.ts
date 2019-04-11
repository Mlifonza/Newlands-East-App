import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayEventFeedsPage } from '../Pages/display-event-feeds/display-event-feeds.page';
import { DisplayEventFeedsPageModule } from '../Pages/display-event-feeds/display-event-feeds.module';

import { SportsPageModule } from '../Pages/sports/sports.module';
import { ChurchPageModule } from '../Pages/church/church.module';
import { EducarePageModule } from '../Pages/educare/educare.module';
import { FestivalsPageModule } from '../Pages/festivals/festivals.module';
import { FoodPageModule } from '../Pages/food/food.module';
import { HealthPageModule } from '../Pages/health/health.module';

import { SportsPage } from '../Pages/sports/sports.page';


@NgModule({
  declarations: [DisplayEventFeedsPage],
  imports: [
    CommonModule,
    DisplayEventFeedsPageModule
  ],
  exports: [DisplayEventFeedsPage]
})
export class DisplayEventModule { }
