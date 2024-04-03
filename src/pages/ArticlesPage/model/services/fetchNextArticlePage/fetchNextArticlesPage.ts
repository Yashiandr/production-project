import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    selectArticlesPageHasMore, selectArticlesPageIsLoading, selectArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { articlePageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
        void,
        void,
        ThunkConfig<string>
    >(
        'articlePage/fetchArticlesPageList',
        async (args, thunkApi) => {
            const {
                dispatch,
                getState,
            } = thunkApi;

            const hasMore = selectArticlesPageHasMore(getState());
            const page = selectArticlesPageNum(getState());
            const isLoading = selectArticlesPageIsLoading(getState());
            if (hasMore && !isLoading) {
                dispatch(articlePageActions.setPage(page + 1));
                dispatch(fetchArticlesList({}));
            }
        },
    );
