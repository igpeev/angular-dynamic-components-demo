import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

export enum CardTypeEnum {
    SOURCE = 'source',
    DESTINATION = 'destination',
}

@Component({
    selector: 'app-card',
    templateUrl: './app-card.component.html',
    styleUrls: ['./app-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppCardComponent implements OnInit {
    @Input() cardType?: CardTypeEnum;

    public readonly CardTypeEnum = CardTypeEnum;

    public ngOnInit() {
        // confirm in browser console this logs only once (during initial component init)
        console.log('[AppCardComponent] init...', this.cardType);
    }
}
