import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';
var DisplayImagePage = /** @class */ (function () {
    function DisplayImagePage(localstorageservice) {
        this.localstorageservice = localstorageservice;
    }
    DisplayImagePage.prototype.ngOnInit = function () {
        this.imagePath = this.localstorageservice.getImagePath();
    };
    DisplayImagePage = tslib_1.__decorate([
        Component({
            selector: 'app-display-image',
            templateUrl: './display-image.page.html',
            styleUrls: ['./display-image.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LocalstorageService])
    ], DisplayImagePage);
    return DisplayImagePage;
}());
export { DisplayImagePage };
//# sourceMappingURL=display-image.page.js.map