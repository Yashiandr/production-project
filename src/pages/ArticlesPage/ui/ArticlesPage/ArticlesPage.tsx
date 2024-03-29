import { ArticleList, ArticleView } from 'entities/Article';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import {
    selectArticlesPageError, selectArticlesPageIsLoading, selectArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlePage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlePageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};
const ArticlesPage = (props: ArticlesPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(selectArticlesPageIsLoading);
    const view = useSelector(selectArticlesPageView);
    const error = useSelector(selectArticlesPageError);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    if (error) {
        return (
            <Page className={classNames(cls.Wrapper, {}, [className, cls.error])}>
                <Text title={error} theme={TextTheme.ERROR} align={TextAlign.CENTER} />
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.Wrapper, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
