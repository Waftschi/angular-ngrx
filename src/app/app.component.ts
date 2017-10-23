import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {  ICounterState } from './counter';

interface AppState {
    counter: ICounterState[];
}


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    counters: ICounterState[];
    counter: number;
    counts: number[];

    constructor(private store: Store<AppState>) {
        store.select('counter').subscribe((state) => {
            this.counters = state;
        });
    }

    action(action) {
        this.store.dispatch(action);
    }
}
