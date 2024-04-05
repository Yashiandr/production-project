import { StateSchema } from 'app/providers/StoreProvider';

export const selectArticleDetailsRecommendationsIsLoading = (
    state: StateSchema,
) => state.articleDetailsPage?.recommendations.isLoading || false;
export const selectArticleDetailsRecommendationsError = (
    state: StateSchema,
) => state.articleDetailsPage?.recommendations.error || '';
