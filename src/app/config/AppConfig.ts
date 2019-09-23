import { Injectable } from '@angular/core';
import { Key } from 'protractor';

@Injectable()

export class AppConfig {

    private _config: { [key:string]: string }

    constructor() {
        this._config = {
            PathAPI: 'http://localhost:50001/api/values/'
        };
    }

    get settings(): { [key:string]: string } {
        return this._config;
    }

    get(key: string) {
        return this._config[key];
    }
}