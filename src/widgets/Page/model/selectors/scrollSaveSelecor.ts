import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const selectScroll = (state: StateSchema) => state.scrollSave.scroll;
export const selectScrollByPath = createSelector(
    selectScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
