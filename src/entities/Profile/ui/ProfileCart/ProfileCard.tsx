import { selectProfileData } from 'entities/Profile/model/selectors/selectProfileData/selectProfileData';
import { selectProfileError } from 'entities/Profile/model/selectors/selectProfileError/selectProfileError';
import { selectProfileIsLoading } from 'entities/Profile/model/selectors/selectProfileIsLoading/selectProfileIsLoading';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('profile');
    const data = useSelector(selectProfileData);
    const isLoading = useSelector(selectProfileIsLoading);
    const error = useSelector(selectProfileError);
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('profile')} />
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('edit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('your name')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('your lastname')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
