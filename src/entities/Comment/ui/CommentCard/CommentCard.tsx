import { memo } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

export interface CommentCardOption {
}

interface CommentCardProps {
    className ?: string;
    comment?: Comment;
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border='50%'/>
                    <Skeleton className={cls.username} width={100} height={16}/>
                </div>
                <Skeleton className={cls.text} width={'100%'} height={50}/>
            </div>

        );
    }
    if (!comment) {
        return null;
    }

    return (
        <VStack max gap={'8'} className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {
                    comment.user.avatar
                        ? <Avatar size={30} src={comment.user.avatar}/>
                        : (

                            <div className={cls.defaultAvatar}>
                                <span className={cls.defaultAvatarText}>{comment.user.username.slice(0, 2)}</span>
                            </div>

                        )
                }
                <Text className={cls.username} title={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </VStack>
    );
});

CommentCard.displayName = 'CommentCard';
