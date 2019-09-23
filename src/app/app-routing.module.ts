import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './Side-Menu-Items/home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './Side-Menu-Items/list/list.module#ListPageModule'
  },
  { path: 'sports', loadChildren: './Pages/sports/sports.module#SportsPageModule' },
  { path: 'music', loadChildren: './Pages/music/music.module#MusicPageModule' },
  { path: 'church', loadChildren: './Pages/church/church.module#ChurchPageModule' },
  { path: 'educare', loadChildren: './Pages/educare/educare.module#EducarePageModule' },
  { path: 'news', loadChildren: './Pages/news/news.module#NewsPageModule' },
  { path: 'transport', loadChildren: './Pages/transport/transport.module#TransportPageModule' },
  { path: 'food', loadChildren: './Pages/food/food.module#FoodPageModule' },
  { path: 'weather', loadChildren: './Pages/weather/weather.module#WeatherPageModule' },
  { path: 'jobs', loadChildren: './Pages/jobs/jobs.module#JobsPageModule' },
  { path: 'tradition', loadChildren: './Pages/tradition/tradition.module#TraditionPageModule' },
  { path: 'festivals', loadChildren: './Pages/festivals/festivals.module#FestivalsPageModule' },
  { path: 'add-sport', loadChildren: './Pages/add-sport/add-sport.module#AddSportPageModule' },
  { path: 'health', loadChildren: './Pages/health/health.module#HealthPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
