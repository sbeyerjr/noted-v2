import {PRACTICE_SUCCESS, practiceSuccess, practiceError, PRACTICE_ERROR} from './GetRequest';

describe('practiceSuccess', () => {
    it('Should return the action', () => {
        const practice = 'a new practice';
        const action = practiceSuccess(practice);
        expect(action.type).toEqual(PRACTICE_SUCCESS);
        expect(action.practice).toEqual(practice);
    });
});

describe('practiceError', () => {
    it('Should return the action', () => {
        const error = 'an error';
        const action = practiceError(error);
        expect(action.type).toEqual(PRACTICE_ERROR);
        expect(action.error).toEqual(error);
    });
});