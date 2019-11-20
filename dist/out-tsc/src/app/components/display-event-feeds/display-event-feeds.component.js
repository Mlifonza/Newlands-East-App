import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var DisplayEventFeedsComponent = /** @class */ (function () {
    function DisplayEventFeedsComponent() {
    }
    DisplayEventFeedsComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input('feeds'),
        tslib_1.__metadata("design:type", Object)
    ], DisplayEventFeedsComponent.prototype, "feeds", void 0);
    tslib_1.__decorate([
        Input('images'),
        tslib_1.__metadata("design:type", Object)
    ], DisplayEventFeedsComponent.prototype, "images", void 0);
    DisplayEventFeedsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-display-event-feeds',
            templateUrl: './display-event-feeds.component.html',
            styleUrls: ['./display-event-feeds.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DisplayEventFeedsComponent);
    return DisplayEventFeedsComponent;
}());
export { DisplayEventFeedsComponent };
//# sourceMappingURL=display-event-feeds.component.js.map