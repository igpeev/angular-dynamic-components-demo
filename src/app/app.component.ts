import { Component } from '@angular/core';

import { CardTypeEnum } from './app-card/app-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public readonly CardTypeEnum = CardTypeEnum;

    public onSwitchPlacesClicked() {
        console.log('SWITCH places clicked !');
    }
}
