import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var EducarePage = /** @class */ (function () {
    function EducarePage() {
    }
    EducarePage.prototype.ngOnInit = function () {
        this.images = [
            { Id: 1, image: 'assets/images/FB_IMG_14791578842662791.jpg' },
            { Id: 2, image: 'assets/images/FB_IMG_14791579119278276.jpg' },
            { Id: 3, image: 'assets/images/FB_IMG_14791581992254811.jpg' }
        ];
        this.educare = [
            { Id: 1, type: 'Hillview Secondary', location: 'Hillview grounds', time: '15:00 - 16:00',
                description: 'Price giving show'
            },
            { Id: 2, type: 'N.E.S.S', location: 'N.E.S.S grounds', time: '14:00 - 15:00',
                description: 'The school is holding a big farewell function'
            }
        ];
    };
    EducarePage = tslib_1.__decorate([
        Component({
            selector: 'app-educare',
            templateUrl: './educare.page.html',
            styleUrls: ['./educare.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], EducarePage);
    return EducarePage;
}());
export { EducarePage };
//# sourceMappingURL=educare.page.js.map