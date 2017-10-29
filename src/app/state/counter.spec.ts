import { counterReducer } from './counter';

describe('CounterReducer', () => {
    it('should be possible to increment', (() => {
        let state;
        state = counterReducer([{
            counterId: 0,
            counter: 0,
            counts: []
        }], {
            type: 'INCREMENT',
            payload: {counterId: 0}
        });
        console.dir(state);
        expect(state[0].counter).toEqual(1);
    }));

    it('should be possible to decrement', (() => {
        let state;
        state = counterReducer([{
            counterId: 0,
            counter: 2,
            counts: []
        }], {
            type: 'DECREMENT',
            payload: {counterId: 0}
        });
        console.dir(state);
        expect(state[0].counter).toEqual(1);
    }));

    it('should be possible to reset', (() => {
        let state;
        state = counterReducer([{
            counterId: 0,
            counter: 2,
            counts: []
        }], {
            type: 'RESET',
            payload: {counterId: 0}
        });
        console.dir(state);
        expect(state[0].counter).toEqual(0);
    }));
});

