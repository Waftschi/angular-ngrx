// counter.ts

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';


export interface ICounterState {
    counterId: number;
    counter: number;
    counts: number[];
}

export const initialState: ICounterState[] = [{
    counterId: 0,
    counter: 0,
    counts: []
}];


export function counterReducer(state: any = initialState, action: { type, payload }): ICounterState[] {
    switch (action.type) {
        case INCREMENT:
            state.find(s => {
                if (s.counterId === action.payload.counterId) {
                    s.counter++;
                    s.counts.push(s.counter);
                }
            });
            return state;

        case DECREMENT:
            state.find(s => {
                if (s.counterId === action.payload.counterId) {
                    s.counter--;
                    s.counts.push(s.counter);
                }
            });
            return state;

        case ADD:
            const add = {
                counterId: Math.floor(Math.random() * 1000),
                counter: 0,
                counts: []
            };
            return state.concat(add);

        case REMOVE:
            return state.filter(s => s.counterId !== action.payload.counterId);

        case RESET:
            state.find(s => {
                if (s.counterId === action.payload.counterId) {
                    s.counter = 0;
                    s.counts.push(s.counter);
                }
            });
            return state;

        default:
            return state;
    }
}
