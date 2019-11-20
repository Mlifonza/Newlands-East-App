import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
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
    { path: 'health', loadChildren: './Pages/health/health.module#HealthPageModule' },
    { path: 'display-image', loadChildren: './Pages/display-image/display-image.module#DisplayImagePageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map