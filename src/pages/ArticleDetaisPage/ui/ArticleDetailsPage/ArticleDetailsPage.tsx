import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text } from 'shared/ui/Text/Text';
import { useInitilaEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    articleDetailsCommentsReducer,
    getArcticleComments,
} from '../../model/slice/articleDetailsCommentSlice';
import { selectArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import cls from './ArticleDetailsPage.module.scss';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export interface ArticleDetailsPageOption {
}

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArcticleComments.selectAll);
    const dispatch = useAppDispatch();
    const commentsIsLoading = useSelector(selectArticleDetailsCommentsIsLoading);

    useInitilaEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div>
                {t('the article was not found')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('comments')} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}/>
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
