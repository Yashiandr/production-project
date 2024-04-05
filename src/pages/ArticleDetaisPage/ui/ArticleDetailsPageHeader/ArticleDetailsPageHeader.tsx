import { selectArticleDetailsData } from 'entities/Article';
import { selectUserAuthData } from 'entities/User';
import { selectCanEditArticle } from 'pages/ArticleDetaisPage/model/selectors/article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './ArticleDetailsPageHeader.module.scss';

export interface ArticleDetailsPageHeaderOption {
}

interface ArticleDetailsPageHeaderProps {
    className ?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();
    const canEdit = useSelector(selectCanEditArticle);
    const article = useSelector(selectArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [navigate, article?.id]);

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button onClick={onBackToList}>
                {t('return to articles')}
            </Button>
            {canEdit && (
                <Button
                    className={cls.editBtn}
                    onClick={onEditArticle}
                >
                    {t('edit')}
                </Button>)}
        </div>
    );
});

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader';
