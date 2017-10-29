import { Action } from '@ngrx/store';
// import { INCREMENT } from './counter';
export const INCREMENT = 'INCREMENT';

export class CounterIncrementAction implements Action {
    readonly type = INCREMENT;
}

export type All
    = CounterIncrementAction;
    // | DisconnectCompaniesSuccessAction
    // | ConnectCompaniesAction
    // | ConnectCompaniesSuccessAction
    // | ConnectCompaniesFailureAction
    // | RemoveCompanyAction
    // | RemoveCompanySuccessAction
    // | RemoveCompanyFailureAction
    // | AddedCompanySyncedAction
    // | UpdatedCompanySyncedAction
    // | RemovedCompanySyncedAction;
