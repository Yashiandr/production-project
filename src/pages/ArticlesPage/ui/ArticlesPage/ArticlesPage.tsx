import { ArticleList, ArticleView } from 'entities/Article';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

export interface ArticlesPageOption {
}

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const {
        className,
    } = props;
    return (
        // eslint-disable-next-line
        <div className={classNames(cls.Wrapper, {}, [className])}>
            <ArticleList
                isLoading={true}
                view={ArticleView.BIG}
                articles={[]} />
        </div>
    );
};

export default memo(ArticlesPage);
