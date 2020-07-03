import {FETCH_PROTECTED_DATA_SUCCESS, fetchProtectedDataSuccess, FETCH_PROTECTED_DATA_ERROR, fetchProtectedDataError} from './ProtectedData';

describe('fetchProtectedDataSuccess', () => {
    it('Should return the action', () => {
        const data = 'Data'
        const action = fetchProtectedDataSuccess(data);
        expect(action.type).toEqual(FETCH_PROTECTED_DATA_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('fetchProtectedDataError', () => {
    it('Should return the action', () => {
        const error = 'Error'
        const action = fetchProtectedDataError(error);
        expect(action.type).toEqual(FETCH_PROTECTED_DATA_ERROR);
        expect(action.error).toEqual(error);
    });
});