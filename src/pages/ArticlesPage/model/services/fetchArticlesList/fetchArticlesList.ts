import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { selectArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface FetchArticlesListArgs {
    page?: number
}

export const fetchArticlesList = createAsyncThunk<
        Article[],
        FetchArticlesListArgs,
        ThunkConfig<string>
    >(
        'articlePage/fetchArticlesList',
        async (args, thunkApi) => {
            const {
                extra,
                rejectWithValue,
                getState,
            } = thunkApi;
            const limit = selectArticlesPageLimit(getState());

            const {
                page = 1,
            } = args;

            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
