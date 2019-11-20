import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var LocalstorageService = /** @class */ (function () {
    function LocalstorageService() {
        this.getImagePath = function () {
            if (JSON.parse(localStorage.getItem('path'))) {
                var stored = JSON.parse(localStorage.getItem('path'));
                return stored.imagePath;
            }
        };
        this.setImagePath = function (image) {
            localStorage.setItem('path', JSON.stringify({ imagePath: image }));
        };
    }
    LocalstorageService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], LocalstorageService);
    return LocalstorageService;
}());
export { LocalstorageService };
//# sourceMappingURL=localstorage.service.js.map