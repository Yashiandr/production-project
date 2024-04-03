import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    selectArticlesPageLimit,
    selectArticlesPageNum,
    selectArticlesPageOrder,
    selectArticlesPageSearch,
    selectArticlesPageSort,
    selectArticlesPageType,
} from '../../selectors/articlesPageSelectors';

interface FetchArticlesListArgs {
    replace?: boolean;
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
            const sort = selectArticlesPageSort(getState());
            const order = selectArticlesPageOrder(getState());
            const search = selectArticlesPageSearch(getState());
            const page = selectArticlesPageNum(getState());
            const type = selectArticlesPageType(getState());

            try {
                addQueryParams({
                    sort, order, search, type,
                });
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        q: search,
                        type: type === ArticleType.ALL ? undefined : type,
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
