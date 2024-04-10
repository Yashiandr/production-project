import { ArticleList } from 'entities/Article';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getArticles } from '../../model/slice/articlesPageSlice';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
    selectArticlesPageError,
    selectArticlesPageIsLoading,
    selectArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import cls from './ArticleInfiniteList.module.scss';

export interface ArticleInfiniteListOption {
}

interface ArticleInfiniteListProps {
    className ?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('article-page');
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(selectArticlesPageIsLoading);
    const view = useSelector(selectArticlesPageView);
    const error = useSelector(selectArticlesPageError);
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return <Text title={t('error')} theme={TextTheme.ERROR}/>;
    }
    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});

ArticleInfiniteList.displayName = 'ArticleInfiniteList';
