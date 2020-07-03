import reducer from './ProtectedData';
import {fetchProtectedDataSuccess } from '../actions/ProtectedData';

describe('Reducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});

        expect(state.data).toEqual('');
        expect(state.error).toEqual(null);
    
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
               data: 'data',
               error: null
            };
            const authToken = 'a new token';
            expect(state.data).toEqual('data');
       
        });
    });
});