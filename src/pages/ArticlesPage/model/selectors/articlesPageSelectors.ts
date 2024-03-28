import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const selectArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const selectArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const selectArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
export const selectArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1;
export const selectArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const selectArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
