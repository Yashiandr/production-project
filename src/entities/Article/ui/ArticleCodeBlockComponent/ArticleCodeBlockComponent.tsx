import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

export interface ArticleCodeBlockComponentOption {
}

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const {
        className,
        block,
    } = props;

    return (
        // eslint-disable-next-line
        <div className={classNames(cls.Wrapper, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});

ArticleCodeBlockComponent.displayName = 'ArticleCode';
