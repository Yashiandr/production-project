import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { selectProfileForm } from '../../selectors/selectProfileForm/selectProfileForm';
import { ValidateProfileError } from '../../types/editableProfileCard';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
        Profile,
        void,
        ThunkConfig<ValidateProfileError[]>
    >(
        'profile/updatehProfileData',
        async (_, thunkApi) => {
            const {
                extra,
                rejectWithValue,
                getState,
            } = thunkApi;

            const formData = selectProfileForm(getState());

            const errors = validateProfileData(formData);

            if (errors.length) {
                return rejectWithValue(errors);
            }

            try {
                const response = await extra.api.put<Profile>(
                    `/profile/${formData?.id}`,
                    formData,
                );

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
            }
        },
    );
