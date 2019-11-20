import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this._config = {
            PathAPI: 'http://localhost:50001/api/values/'
        };
    }
    Object.defineProperty(AppConfig.prototype, "settings", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    AppConfig.prototype.get = function (key) {
        return this._config[key];
    };
    AppConfig = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], AppConfig);
    return AppConfig;
}());
export { AppConfig };
//# sourceMappingURL=AppConfig.js.map