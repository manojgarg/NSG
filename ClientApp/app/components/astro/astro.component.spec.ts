/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { assert } from 'chai';
import { AstroComponent } from './astro.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

let fixture: ComponentFixture<AstroComponent>;

describe('Astro component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [AstroComponent] });
        fixture = TestBed.createComponent(AstroComponent);
        fixture.detectChanges();
    });

    it('should display a title', async(() => {
        const titleText = fixture.nativeElement.querySelector('h1').textContent;
        expect(titleText).toEqual('Astro');
    }));


});
