import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { selectProfileData } from './selectProfileData';

describe('selectProfileData.test', () => {
    test('should return data', () => {
        const data = {
            username: 'admin',
            age: 25,
            country: Country.Russia,
            lastname: 'Andryashin',
            first: 'Nikita',
            city: 'stptrsb',
            currency: Currency.EUR,
        };

        const state: DeepPartial<StateSchema> = {
            profile: { data },
        };
        expect(selectProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfileData(state as StateSchema)).toEqual(undefined);
    });
});
