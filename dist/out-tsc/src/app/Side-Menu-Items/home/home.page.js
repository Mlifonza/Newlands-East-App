import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var HomePage = /** @class */ (function () {
    function HomePage(router, http) {
        this.router = router;
        this.http = http;
    }
    HomePage.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(environment.url + 'api/SampleData/WeatherForecasts').toPromise()];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.onSports = function () {
        this.router.navigateByUrl('/sports');
    };
    HomePage.prototype.onFestivals = function () {
        this.router.navigateByUrl('/festivals');
    };
    HomePage.prototype.onMusic = function () {
        this.router.navigateByUrl('/music');
    };
    HomePage.prototype.onChurch = function () {
        this.router.navigateByUrl('/church');
    };
    HomePage.prototype.onEducare = function () {
        this.router.navigateByUrl('/educare');
    };
    HomePage.prototype.onNews = function () {
        this.router.navigateByUrl('/news');
    };
    HomePage.prototype.onTransport = function () {
        this.router.navigateByUrl('/transport');
    };
    HomePage.prototype.onFood = function () {
        this.router.navigateByUrl('/food');
    };
    HomePage.prototype.onWeather = function () {
        this.router.navigateByUrl('/weather');
    };
    HomePage.prototype.onJobs = function () {
        this.router.navigateByUrl('/jobs');
    };
    HomePage.prototype.onTradition = function () {
        this.router.navigateByUrl('/tradition');
    };
    HomePage.prototype.onHealth = function () {
        this.router.navigateByUrl('/health');
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, HttpClient])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map