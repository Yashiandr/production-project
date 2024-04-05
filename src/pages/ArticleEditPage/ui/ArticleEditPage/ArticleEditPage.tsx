import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';
import cls from './ArticleEditPage.module.scss';

export interface ArticleEditPageOption {
}

interface ArticleEditPageProps {
    className ?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const {
        className,
    } = props;
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);
    const { t } = useTranslation('article-details');

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit
                ? t('edit article') + id
                : t('create article')}
        </Page>
    );
});

ArticleEditPage.displayName = 'ArticleEditPage';

export default ArticleEditPage;
