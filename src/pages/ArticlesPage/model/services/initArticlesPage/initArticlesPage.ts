import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { selectArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlePageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
        void,
        void,
        ThunkConfig<string>
    >(
        'articlePage/initArticlesPage',
        async (args, thunkApi) => {
            const {
                dispatch,
                getState,
            } = thunkApi;
            const inited = selectArticlesPageInited(getState());

            if (!inited) {
                dispatch(articlePageActions.initState());
                dispatch(fetchArticlesList({
                    page: 1,
                }));
            }
        },

    );
