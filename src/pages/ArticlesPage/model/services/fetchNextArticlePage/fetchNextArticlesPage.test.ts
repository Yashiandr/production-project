import { ArticleSortField, ArticleType } from 'entities/Article';
import { TestAsynkThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsynkThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: true,
                order: 'asc',
                sort: ArticleSortField.TITLE,
                search: '',
                type: ArticleType.ALL,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
    });
    test('fetchArticleList not called becouse db hasn`t more data', async () => {
        const thunk = new TestAsynkThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
                _inited: true,
                order: 'asc',
                sort: ArticleSortField.TITLE,
                search: '',
                type: ArticleType.ALL,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
    test('fetchArticleList not called becouse server pending', async () => {
        const thunk = new TestAsynkThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasMore: true,
                _inited: true,
                order: 'asc',
                sort: ArticleSortField.TITLE,
                search: '',
                type: ArticleType.ALL,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
