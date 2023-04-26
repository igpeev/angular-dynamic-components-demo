import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionComponent } from './description.component';

describe('DescriptionComponent', () => {
    let component: DescriptionComponent;
    let fixture: ComponentFixture<DescriptionComponent>;

    const createAndInitComponent = () => {
        TestBed.configureTestingModule({
            declarations: [DescriptionComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(DescriptionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    };

    it('should create', () => {
        createAndInitComponent();
        expect(component).toBeTruthy();
    });
});
