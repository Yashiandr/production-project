import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsynkThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

const data = {
    username: 'admin',
    age: 25,
    country: Country.Russia,
    lastname: 'Andryashin',
    first: 'Nikita',
    city: 'stptrsb',
    currency: Currency.EUR,
};

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsynkThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsynkThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
