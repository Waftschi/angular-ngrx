import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { storeFreeze } from 'ngrx-store-freeze';
import { AppComponent } from './app.component';
import { counterReducer, ICounterState } from './counter';
import { StoreModule, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterComponent } from './counter/counter.component';
import { OrderByPipe } from './order-by.pipe';
import { environment } from '../environments/environment'; // Angular CLI environment

export interface State {

};

export const reducers: ActionReducerMap<State> = {
    counter: counterReducer
};

export const metaReducers: MetaReducer<State>[] = [storeFreeze];

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        OrderByPipe
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot(reducers, metaReducers),
        StoreDevtoolsModule.instrument()
    ],
    providers: [OrderByPipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}
