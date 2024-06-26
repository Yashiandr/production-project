import { ArticleList } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) {
        return null;
    }
    return (
        <VStack gap={'8'} className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('recommendations')}
            />
            <ArticleList
                virtualized={false}
                articles={articles}
                target={'_blank'}
            />

        </VStack>
    );
});

ArticleRecommendationsList.displayName = 'ArticleRecommendationsList';
