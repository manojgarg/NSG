/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { assert } from 'chai';
import { WedPlanComponent } from './wedplan.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

let fixture: ComponentFixture<WedPlanComponent>;

describe('WedPlan Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [WedPlanComponent] });
        fixture = TestBed.createComponent(WedPlanComponent);
        fixture.detectChanges();
    });

    it('should display a title', async(() => {
        const titleText = fixture.nativeElement.querySelector('h1').textContent;
        expect(titleText).toEqual('Wedding Planning');
    }));


});
