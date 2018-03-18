/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { assert } from 'chai';
import { MatrimonialComponent } from './matrimonial.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

let fixture: ComponentFixture<MatrimonialComponent>;

describe('Matrimonial Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [MatrimonialComponent] });
        fixture = TestBed.createComponent(MatrimonialComponent);
        fixture.detectChanges();
    });

    it('should display a title', async(() => {
        const titleText = fixture.nativeElement.querySelector('h1').textContent;
        expect(titleText).toEqual('Matrimonial');
    }));


});
