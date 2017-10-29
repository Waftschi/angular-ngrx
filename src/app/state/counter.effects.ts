import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import * as CounterActions from './counter.actions';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { EFFECT_TEST } from './counter';


@Injectable()
export class CounterEffects {

    constructor(// private companyService: CompanyService,
        private actions$: Actions) {
    }


    @Effect() connectCounter$ = this.actions$
    // .ofType(CounterActions.INCREMENT, 'DECREMENT')
        .ofType(EFFECT_TEST)
        .switchMap((val) =>
            Observable.of({type: 'EFFECT_PULLED_COUNTER', payload: {counterId: 0, counter: 10, counts: [], pulled: true}})
        )
        .do((val) => console.dir(val));
}
