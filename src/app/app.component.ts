import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EmbeddedViewRef,
    OnDestroy,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

import { AppCardComponent, CardTypeEnum } from './app-card/app-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit, OnDestroy {
    public readonly CardTypeEnum = CardTypeEnum;

    public isSwitched = false;

    #sourceAndDestinationCardAnchorViewContainerRef!: ViewContainerRef;
    @ViewChild('sourceAndDestinationCardAnchor', { read: ViewContainerRef })
    private set nameIsImmaterial_0(anchorViewContainerRef: ViewContainerRef) {
        if (anchorViewContainerRef) {
            this.#sourceAndDestinationCardAnchorViewContainerRef = anchorViewContainerRef;
        }
    }

    #sourceEmbeddedViewRef!: EmbeddedViewRef<AppCardComponent>;
    #sourceTemplateRef!: TemplateRef<AppCardComponent>;
    @ViewChild('sourceTemplate', { read: TemplateRef<AppCardComponent> })
    private set nameIsImmaterial_1(sourceTemplateRef: TemplateRef<AppCardComponent>) {
        if (sourceTemplateRef) {
            this.#sourceTemplateRef = sourceTemplateRef;
        }
    }

    #switchButtonEmbeddedViewRef!: EmbeddedViewRef<HTMLButtonElement>;
    #switchSourceAndDestinationButtonTemplateRef!: TemplateRef<HTMLButtonElement>;
    @ViewChild('switchSourceAndDestinationButtonTemplate', { read: TemplateRef<HTMLButtonElement> })
    private set nameIsImmaterial_2(buttonTemplateRef: TemplateRef<HTMLButtonElement>) {
        if (buttonTemplateRef) {
            this.#switchSourceAndDestinationButtonTemplateRef = buttonTemplateRef;
        }
    }

    #destinationEmbeddedViewRef!: EmbeddedViewRef<AppCardComponent>;
    #destinationTemplateRef!: TemplateRef<AppCardComponent>;
    @ViewChild('destinationTemplate', { read: TemplateRef<AppCardComponent> })
    private set nameIsImmaterial_3(destinationTemplateRef: TemplateRef<AppCardComponent>) {
        if (destinationTemplateRef) {
            this.#destinationTemplateRef = destinationTemplateRef;
        }
    }

    constructor(private cdr: ChangeDetectorRef) {}

    public ngAfterViewInit() {
        const source: EmbeddedViewRef<AppCardComponent> = this.#sourceAndDestinationCardAnchorViewContainerRef.createEmbeddedView(
            this.#sourceTemplateRef
        );
        const switchButton: EmbeddedViewRef<HTMLButtonElement> = this.#sourceAndDestinationCardAnchorViewContainerRef.createEmbeddedView(
            this.#switchSourceAndDestinationButtonTemplateRef
        );
        const destination: EmbeddedViewRef<AppCardComponent> =
            this.#sourceAndDestinationCardAnchorViewContainerRef.createEmbeddedView(this.#destinationTemplateRef);

        this.cdr.detectChanges(); // "ExpressionChangedAfterItHasBeenCheckedError" addressed

        this.#sourceEmbeddedViewRef = source;
        this.#switchButtonEmbeddedViewRef = switchButton;
        this.#destinationEmbeddedViewRef = destination;
    }

    public onSwitchPlacesClicked() {
        console.log('SWITCH places clicked !');

        const sourceIndex = this.#sourceAndDestinationCardAnchorViewContainerRef.indexOf(this.#sourceEmbeddedViewRef);
        const destinationIndex = this.#sourceAndDestinationCardAnchorViewContainerRef.indexOf(this.#destinationEmbeddedViewRef);

        this.#sourceAndDestinationCardAnchorViewContainerRef.move(this.#sourceEmbeddedViewRef, destinationIndex);
        this.#sourceAndDestinationCardAnchorViewContainerRef.move(this.#destinationEmbeddedViewRef, sourceIndex);
    }

    public onSwitchPlacesWithCssClicked() {
        console.log('SWITCH places with CSS clicked !');
        this.isSwitched = !this.isSwitched;
    }

    private destroyDynamicComponents() {
        this.#sourceEmbeddedViewRef.destroy();
        this.#switchButtonEmbeddedViewRef.destroy();
        this.#destinationEmbeddedViewRef.destroy();
    }

    public ngOnDestroy() {
        this.destroyDynamicComponents();
    }
}
