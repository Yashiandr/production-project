import { ArticleSortField } from 'entities/Article';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { SortOrder } from 'shared/types';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import cls from './ArticleSortSelector.module.scss';

export interface ArticleSortSelectorOption {
}

interface ArticleSortSelectorProps {
    className ?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newOrder: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    } = props;
    const { t } = useTranslation('article-page');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('asc'),
        },
        {
            value: 'desc',
            content: t('desc'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('created'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('views'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                options={sortFieldOptions}
                label={t('sort by')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select<SortOrder>
                options={orderOptions}
                label={t('by')}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});

ArticleSortSelector.displayName = 'ArticleSortSelector';
