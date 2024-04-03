import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';

export const selectArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const selectArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const selectArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
export const selectArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1;
export const selectArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const selectArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const selectArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited;
export const selectArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticleSortField.CREATED;
export const selectArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc';
export const selectArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? '';
export const selectArticlesPageType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.ALL;
