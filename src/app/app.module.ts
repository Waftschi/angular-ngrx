import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { storeFreeze } from 'ngrx-store-freeze';
import { AppComponent } from './app.component';
// import { countersReducer, ICounterState } from './counters';
import { counterReducer } from './state/counter';
import { StoreModule, MetaReducer, ActionReducerMap, State } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterComponent } from './counter/counter.component';
import { OrderByPipe } from './order-by.pipe';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { CounterEffects } from './state/counter.effects';


// export interface State {}
//
// export const reducers: ActionReducerMap<State> = {
//     counter: counterReducer
// };

// export const metaReducers: MetaReducer<State>[] = [storeFreeze];

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        OrderByPipe
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({counter: counterReducer}),
        EffectsModule.forRoot([CounterEffects]),
        StoreDevtoolsModule.instrument()
    ],
    providers: [OrderByPipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}
