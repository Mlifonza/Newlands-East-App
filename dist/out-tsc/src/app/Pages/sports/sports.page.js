import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PopoverController } from '@ionic/angular';
var SportsPage = /** @class */ (function () {
    function SportsPage(location, router, popCntrl) {
        var _this = this;
        this.location = location;
        this.router = router;
        this.popCntrl = popCntrl;
        this.addSport = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.router.navigateByUrl('/add-sport');
                return [2 /*return*/];
            });
        }); };
    }
    SportsPage.prototype.ngOnInit = function () {
        this.images = [
            { Id: 1, image: 'assets/images/ipanews_62877f2f-0375-4aa7-9719-af11a5ddcf19_1.jpeg' },
            { Id: 2, image: 'assets/images/13244226_1708879399400227_5602836980597976120_o.jpg' },
            { Id: 3, image: 'assets/images/cricket.jpg' }
        ];
        this.sport = [
            { Id: 1, type: 'Footbal', location: 'Pafaroh grounds', time: '15:00',
                description: 'Newlands United FC will be playing a crutial match against TP Mazembe'
            },
            { Id: 2, type: 'Cricket', location: 'John Dory grounds', time: '14:00',
                description: 'Newlands United FC will be playing a crutial match against Chippa United'
            }
        ];
    };
    SportsPage = tslib_1.__decorate([
        Component({
            selector: 'app-sports',
            templateUrl: './sports.page.html',
            styleUrls: ['./sports.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Location,
            Router,
            PopoverController])
    ], SportsPage);
    return SportsPage;
}());
export { SportsPage };
//# sourceMappingURL=sports.page.js.map