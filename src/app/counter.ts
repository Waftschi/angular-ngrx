// counter.ts

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const PRESET = 'RESET ';

export interface ICounterState {
    counter: number;
    counts: number[];
}


export const initialState: ICounterState = {
    counter: 0,
    counts: []
};

export function counterReducer(state: any = initialState, action: { type, payload }): ICounterState {
    let counter = 0;
    switch (action.type) {
        case INCREMENT:
            counter = state.counter + 1;
            return {...state, ...{counter: counter, counts: [...state.counts, counter]}};

        case DECREMENT:
            counter = state.counter - 1;
            return Object.assign({}, state, {counter: counter, counts: [...state.counts, counter]});

        case RESET:
            return Object.assign({}, state, {counter: 0, counts: []});

        case PRESET:
            return Object.assign({}, state, {counter: 6, counts: [6]});

        default:
            return state;
    }
}
