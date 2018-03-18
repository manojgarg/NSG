/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { assert } from 'chai';
import { VastuComponent } from './vastu.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

let fixture: ComponentFixture<VastuComponent>;

describe('Vastu Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [VastuComponent] });
        fixture = TestBed.createComponent(VastuComponent);
        fixture.detectChanges();
    });

    it('should display a title', async(() => {
        const titleText = fixture.nativeElement.querySelector('h1').textContent;
        expect(titleText).toEqual('Vastu');
    }));


});
