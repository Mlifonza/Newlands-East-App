import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var JobsPage = /** @class */ (function () {
    function JobsPage() {
    }
    JobsPage.prototype.ngOnInit = function () {
        this.images = [
            { Id: 1, image: 'assets/images/FB_IMG_14791274675492794.jpg' },
            { Id: 2, image: 'assets/images/FB_IMG_14786242541477441.jpg' },
            { Id: 3, image: 'assets/images/FB_IMG_14786233358881485.jpg' }
        ];
        this.job = [
            { Id: 1, type: 'Beckys Burgers', location: 'Hambanker', time: '15:00 - 16:00',
                description: "There's a new menu in town"
            },
            { Id: 2, type: 'Lisa Chicken Wings', location: 'Saw fish', time: '14:00 - 15:00',
                description: 'Chicken wings for a really low price in stock, get them while their hot'
            }
        ];
    };
    JobsPage = tslib_1.__decorate([
        Component({
            selector: 'app-jobs',
            templateUrl: './jobs.page.html',
            styleUrls: ['./jobs.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], JobsPage);
    return JobsPage;
}());
export { JobsPage };
//# sourceMappingURL=jobs.page.js.map