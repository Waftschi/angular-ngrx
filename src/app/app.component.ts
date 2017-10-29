import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICounterState } from './state/counter';
import { Observable } from 'rxjs/Observable';
import { OrderByPipe } from './order-by.pipe';

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
    counters$: Observable<ICounterState[]>;
    order = 'counter';
    ascending = true;

    constructor(private store: Store<AppState>, private orderByPipe: OrderByPipe) {
        // store.select('counter').subscribe((state) => {
        //     this.counters = state;
        // });

        this.counters$ = store.select('counter');
    }

    action(action) {
        this.store.dispatch(action);
    }

    orderBy() {
        this.counters = this.orderByPipe.transform(this.counters, 'counter');
    }
}
