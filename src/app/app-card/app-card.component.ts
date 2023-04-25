import { Component, Input } from '@angular/core';

export enum CardTypeEnum {
    SOURCE = 'source',
    DESTINATION = 'destination',
}

@Component({
    selector: 'app-card',
    templateUrl: './app-card.component.html',
    styleUrls: ['./app-card.component.scss'],
})
export class AppCardComponent {
    @Input() cardType?: CardTypeEnum;

    public readonly CardTypeEnum = CardTypeEnum;
}
