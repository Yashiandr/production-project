import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { action } from '@storybook/addon-actions/*';
import { ScrollSaveSchema } from '../types/page';

const initialState: ScrollSaveSchema = {
    scroll: {},
};
export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{path: string; position: number}>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
