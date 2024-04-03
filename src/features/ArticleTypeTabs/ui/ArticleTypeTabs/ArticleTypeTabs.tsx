import { ArticleType } from 'entities/Article';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';

export interface ArticleTypeTabsOption {
}

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const {
        className,
        value,
        onChangeType,
    } = props;
    const { t } = useTranslation('article-page');
    const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('all'),
        },
        {
            value: ArticleType.IT,
            content: t('it'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('economics'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('science'),
        },
    ], [t]);

    const onTabClick = useCallback((tab: TabItem<ArticleType>) => {
        onChangeType(tab.value);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />

    );
});

ArticleTypeTabs.displayName = 'ArticleTypeTabs';
