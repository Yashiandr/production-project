import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

export interface ArticleListOption {
}

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
    } = props;

    const renderArticle = (article: Article) => <ArticleListItem key={article.id} article={article} view={view} />;
    const getSkeletons = (view: ArticleView) => (
        <>
            {
                new Array(view === ArticleView.SMALL ? 15 : 3)
                    .fill(0)
                    .map((item, index) => (
                        <ArticleListItemSkeleton key={index} view={view} />
                    ))
            }
        </>);
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});

ArticleList.displayName = 'ArticleList';
