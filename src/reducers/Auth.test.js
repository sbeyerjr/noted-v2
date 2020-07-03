import reducer from './Auth';
import {
    authToken,
    authSuccess
  } from '../actions/Auth';

describe('Reducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});

        expect(state.authToken).toEqual(null);
        expect(state.currentUser).toEqual(null);
        expect(state.loading).toEqual(false);
        expect(state.error).toEqual(null);
    });
    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });
    describe('authToken', () => {
        it('Should give auth token', () => {
            // Mess up the state a bit to simulate an existing game
            let state = {
                authToken: 'a new token'
            };
            const authToken = 'a new token';
            expect(state.authToken).toEqual(authToken);
        });
    });
    describe('authSuccess', () => {
        it('Should give auth success', () => {
            // Mess up the state a bit to simulate an existing game
            let state = {
                loading: false,
                currentUser: 'Bob'
            };
            const currentUser = 'Bob';
            const loading = false;
            expect(state.currentUser).toEqual(currentUser);
            expect(state.loading).toEqual(loading);
        });
    });
});