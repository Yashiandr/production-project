import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/editableProfileCard';
import { selectProfileValidateErrors } from './selectProfileValidateErrors';

describe('selectProfileValidateErrors.test', () => {
    test('should return form', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },
        };
        expect(selectProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
