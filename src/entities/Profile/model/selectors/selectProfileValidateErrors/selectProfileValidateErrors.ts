import { StateSchema } from 'app/providers/StoreProvider';

export const selectProfileValidateErrors = (state:StateSchema) => state.profile?.validateErrors;
