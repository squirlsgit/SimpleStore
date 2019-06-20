import { NgModule } from '@angular/core';
import { AppComponent } from '@app/app.component';
import { CoreModule } from '@core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductEffects, SessionModule } from './rxjs';

import { ManageProducts } from './rxjs/Store/reducers';
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CoreModule,
        BrowserModule,
        SessionModule,
        StoreModule.forRoot({ products: ManageProducts }),
        EffectsModule.forRoot([ProductEffects])
    ],
    providers: [],
    bootstrap: [AppComponent]
}) export class AppModule { };