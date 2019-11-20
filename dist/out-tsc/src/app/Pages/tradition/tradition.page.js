import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var TraditionPage = /** @class */ (function () {
    function TraditionPage() {
    }
    TraditionPage.prototype.ngOnInit = function () {
        this.images = [
            { Id: 1, image: 'assets/images/FB_IMG_14791274675492794.jpg' },
            { Id: 2, image: 'assets/images/FB_IMG_14786242541477441.jpg' },
            { Id: 3, image: 'assets/images/FB_IMG_14786233358881485.jpg' }
        ];
        this.tradition = [
            { Id: 1, type: 'Beckys Burgers', location: 'Hambanker', time: '15:00 - 16:00',
                description: "There's a new menu in town"
            },
            { Id: 2, type: 'Lisa Chicken Wings', location: 'Saw fish', time: '14:00 - 15:00',
                description: 'Chicken wings for a really low price in stock, get them while their hot'
            }
        ];
    };
    TraditionPage = tslib_1.__decorate([
        Component({
            selector: 'app-tradition',
            templateUrl: './tradition.page.html',
            styleUrls: ['./tradition.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TraditionPage);
    return TraditionPage;
}());
export { TraditionPage };
//# sourceMappingURL=tradition.page.js.map