import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var WeatherPage = /** @class */ (function () {
    function WeatherPage(http) {
        this.http = http;
    }
    WeatherPage.prototype.ngOnInit = function () {
        var res = this.http.get('api.openweathermap.org/data/2.5/weather?q=London');
        console.log(res);
    };
    WeatherPage = tslib_1.__decorate([
        Component({
            selector: 'app-weather',
            templateUrl: './weather.page.html',
            styleUrls: ['./weather.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], WeatherPage);
    return WeatherPage;
}());
export { WeatherPage };
//# sourceMappingURL=weather.page.js.map