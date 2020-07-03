import reducer from './Practice';
import { practiceSuccess, practiceError } from '../actions/GetRequest';

describe('Reducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});

        expect(state.date).toEqual('');
        expect(state.timePracticed).toEqual('');
        expect(state.scales).toEqual('');
        expect(state.otherMusic).toEqual('');
    });
    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });
    describe('practiceSuccess', () => {
        it('Should set a new practice', () => {
            // Mess up the state a bit to simulate an existing game
            let state = {
               date: '11/26/83',
               timePracticed: '30',
               scales: 'A',
               otherMusic: 'Other'
            };
            const authToken = 'a new token';
            expect(state.date).toEqual('11/26/83');
            expect(state.timePracticed).toEqual('30');
            expect(state.scales).toEqual('A');
            expect(state.otherMusic).toEqual('Other');
        });
    });
});