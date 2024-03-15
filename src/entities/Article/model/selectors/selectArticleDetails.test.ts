import { StateSchema } from 'app/providers/StoreProvider';
import {
    selectArticleDetailsData,
    selectArticleDetailsError,
    selectArticleDetailsIsLoading,
} from './selectArticleDetails';

describe('selectArticleDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(selectArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });

    test('should return isLoading true', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(selectArticleDetailsIsLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(selectArticleDetailsError(state as StateSchema)).toBe('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
