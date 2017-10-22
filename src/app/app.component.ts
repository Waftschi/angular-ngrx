import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET, PRESET, ICounterState } from './counter';

interface AppState {
    counter: ICounterState;
}


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    counter: number;
    counts: number[];

    constructor(private store: Store<AppState>) {
        store.select('counter').subscribe((state) => {
            this.counter = state.counter;
            this.counts = state.counts;
        });
    }

    action(type) {
        this.store.dispatch({type: type});
    }
}
