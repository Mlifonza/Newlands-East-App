import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ChurchPage = /** @class */ (function () {
    function ChurchPage() {
    }
    ChurchPage.prototype.ngOnInit = function () {
        this.images = [
            { Id: 1, image: 'assets/images/FB_IMG_14798889795944445.jpg' },
            { Id: 2, image: 'assets/images/FB_IMG_14797316093541231.jpg' },
            { Id: 3, image: 'assets/images/FB_IMG_14797316616507110.jpg' }
        ];
        this.church = [
            { Id: 1, type: 'Christian Church', location: 'Pafaroh grounds', time: '15:00 - 16:00',
                description: 'Service for the kids'
            },
            { Id: 2, type: 'Roman Cathelic', location: 'John Dory grounds', time: '14:00 - 15:00',
                description: 'Service for the poor human beings in our community'
            }
        ];
    };
    ChurchPage = tslib_1.__decorate([
        Component({
            selector: 'app-church',
            templateUrl: './church.page.html',
            styleUrls: ['./church.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ChurchPage);
    return ChurchPage;
}());
export { ChurchPage };
//# sourceMappingURL=church.page.js.map