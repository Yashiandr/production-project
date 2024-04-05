import { StateSchema } from 'app/providers/StoreProvider';

export const selectArticleDetailsCommentsIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.comments.isLoading;
};
export const selectArticleDetailsCommentsError = (state: StateSchema) => {
    return state.articleDetailsPage?.comments.error;
};
