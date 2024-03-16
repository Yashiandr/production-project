import { StateSchema } from 'app/providers/StoreProvider';

export const selectArticleDetailsCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;
export const selectArticleDetailsCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
