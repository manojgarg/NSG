import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { MatrimonialComponent } from './components/matrimonial/matrimonial.component';
import { AstroComponent } from './components/astro/astro.component';
import { VastuComponent } from './components/vastu/vastu.component';
import { WedPlanComponent } from './components/wedplan/wedplan.component';
import { MyDatePicker, MyDatePickerModule } from 'mydatepicker';


@NgModule({

   
    declarations: [
        AppComponent,
        NavMenuComponent,
        AstroComponent,
        MatrimonialComponent,
        VastuComponent,
        WedPlanComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        MyDatePickerModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'astro', pathMatch: 'full' },
            { path: 'astro', component: AstroComponent },
            { path: 'matrimonial', component: MatrimonialComponent },
            { path: 'vastu', component: VastuComponent },
            { path: 'wed-plan', component: WedPlanComponent},
            { path: '**', redirectTo: 'astro' }
        ])
    ]
})
export class AppModuleShared {
}
