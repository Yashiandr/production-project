import { StateSchema } from 'app/providers/StoreProvider';
import { selectProfileError } from './selectProfileError';

describe('selectProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { error: '123' },
        };
        expect(selectProfileError(state as StateSchema)).toEqual('123');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfileError(state as StateSchema)).toEqual(undefined);
    });
});
