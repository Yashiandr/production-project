import { AsyncThunkAction, DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue>
    = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

export class TestAsynkThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    selectState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    constructor(
        actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
        state?: DeepPartial<StateSchema>,
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.selectState = jest.fn(() => state as StateSchema);

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(
            this.dispatch,
            this.selectState,
            { api: this.api, navigate: this.navigate },
        );

        return result;
    }
}
