export { articleDetailsReducer } from './model/slice/articleDetailsSlice';

export {
    ArticleDetails,
} from './ui/ArticleDetails/ArticleDetails';
export {
    selectArticleDetailsData,
} from './model/selectors/selectArticleDetails';
export {
    ArticleView, ArticleSortField, Article, ArticleType,
} from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export { ArticleList } from './ui/ArticleList/ArticleList';
