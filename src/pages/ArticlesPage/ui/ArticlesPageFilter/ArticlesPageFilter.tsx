import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';
import { ArticleSortSelector } from 'features/ArticleSortSelector';
import { ArticleTypeTabs } from 'features/ArticleTypeTabs';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from 'shared/types';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
    selectArticlesPageOrder,
    selectArticlesPageSearch,
    selectArticlesPageSort,
    selectArticlesPageType,
    selectArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlePageActions } from '../../model/slice/articlesPageSlice';
import cls from './ArticlesPageFilter.module.scss';

export interface ArticlesPageFilterOption {
}

interface ArticlesPageFilterProps {
    className ?: string;
}

export const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('article-page');
    const dispatch = useDispatch();
    const view = useSelector(selectArticlesPageView);
    const sort = useSelector(selectArticlesPageSort);
    const order = useSelector(selectArticlesPageOrder);
    const search = useSelector(selectArticlesPageSearch);
    const type = useSelector(selectArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((newView: ArticleView) => {
        dispatch(articlePageActions.setView(newView));
    }, [dispatch]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlePageActions.setOrder(newOrder));
        dispatch(articlePageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlePageActions.setSort(newSort));
        dispatch(articlePageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);

    const onChangeSearch = useCallback((newSearch: string) => {
        dispatch(articlePageActions.setSearch(newSearch));
        dispatch(articlePageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);

    const onChangeType = useCallback((type: ArticleType) => {
        dispatch(articlePageActions.setType(type));
        dispatch(articlePageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);

    return (
        <div className={classNames(cls.ArticlesPageFilter, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort = {sort}
                    order = {order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('search')}
                    value={search}
                    onChange={onChangeSearch}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </div>
    );
});

ArticlesPageFilter.displayName = 'ArticlesPageFilter';
