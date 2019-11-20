import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
var FestivalsPage = /** @class */ (function () {
    function FestivalsPage(videoPlayer) {
        this.videoPlayer = videoPlayer;
    }
    FestivalsPage.prototype.ngOnInit = function () {
        this.images = [
            { Id: 1, image: 'assets/images/.facebook_-314155719.jpg' },
            { Id: 2, image: 'assets/images/944958_1135656066445117_7384405561308028099_n.jpg' },
            { Id: 3, image: 'assets/images/‪+27 79 199 7006‬ 20161116_110039.jpg' }
        ];
        this.festival = [
            { Id: 1, type: 'Music', location: 'Pafaroh grounds', time: '15:00 - until late',
                description: 'Hip/hop and house music concert'
            },
            { Id: 2, type: 'Children', location: 'John Dory grounds', time: '14:00',
                description: 'Lovely day to bring your children to the ground, with jumping castles etc'
            }
        ];
    };
    FestivalsPage.prototype.PlayVideo = function () {
        this.videoPlayer.play('assets/videos/VID-20190103-WA0002.mp4').then(function () {
            console.log('video completed');
        }).catch(function (err) {
            console.log(err);
        });
    };
    FestivalsPage = tslib_1.__decorate([
        Component({
            selector: 'app-festivals',
            templateUrl: './festivals.page.html',
            styleUrls: ['./festivals.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [VideoPlayer])
    ], FestivalsPage);
    return FestivalsPage;
}());
export { FestivalsPage };
//# sourceMappingURL=festivals.page.js.map