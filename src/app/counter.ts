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
    console.dir(state);

    switch (action.type) {
        case INCREMENT:
            state.find(counter => {
                if (counter.counterId === action.payload.counterId) {
                    counter.counter++;
                    counter.counts.push(counter.counter);
                }
            });
            return state;

        case DECREMENT:
            return state.map(counter => {
                if (counter.counterId === action.payload.counterId) {
                    Object.assign({}, counter, {
                        counter: (counter.counter--),
                        counts: (counter.counts.push(counter.counter))
                    });
                }
                return counter;
            });
        case ADD:
            const add = {
                counterId: state.length + 1,
                counter: 0,
                counts: []
            };
            return state.concat([add]);

        case REMOVE:
            return state.filter(s => s.counterId !== action.payload.counterId);

        case RESET:
            state.find(counter => {
                if (counter.counterId === action.payload.counterId) {
                    counter.counter = 0;
                    counter.counts.push(counter.counter);
                }
            });
            return state;

        default:
            return state;
    }
}
