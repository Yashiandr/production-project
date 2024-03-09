import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { selectLoginUsername } from './selectLoginUsername';

describe('selectLoginError.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'ivan',
            },
        };
        expect(selectLoginUsername(state as StateSchema)).toEqual('ivan');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectLoginUsername(state as StateSchema)).toEqual('');
    });
});
