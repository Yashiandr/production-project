import { ArticleDetails } from 'entities/Article';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';

export interface ArticleDetailsPageOption {
}

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('article-details');
    let { id } = useParams<{ id: string }>();
    if (__PROJECT__ === 'storybook') {
        id = '1';
    }

    if (!id && __PROJECT__ !== 'storybook') {
        return (
            <div>
                {t('the article was not found')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack gap={'16'} max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id!} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id!} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
