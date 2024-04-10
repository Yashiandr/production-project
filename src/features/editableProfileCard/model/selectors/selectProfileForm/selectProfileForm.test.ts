import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { selectProfileForm } from './selectProfileForm';

describe('selectProfileForm.test', () => {
    test('should return form', () => {
        const form = {
            username: 'admin',
            age: 25,
            country: Country.Russia,
            lastname: 'Andryashin',
            first: 'Nikita',
            city: 'stptrsb',
            currency: Currency.EUR,
        };

        const state: DeepPartial<StateSchema> = {
            profile: { form },
        };
        expect(selectProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
