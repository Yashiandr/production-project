import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname: (value?: string) => void
    onChangeLastname: (value?: string) => void
    onChangeAge: (value?: string) => void
    onChangeCity: (value?: string) => void
    onChangeAvatar: (value?: string) => void
    onChangeUsername: (value?: string) => void
    onChangeCurrency: (currency: Currency) => void
    onChangeCountry: (country: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCountry,
        onChangeCurrency,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack max justify='center' className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </HStack>

        );
    }

    if (error) {
        return (
            <HStack justify='center' max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('an error occurred while uploading the profile')}
                    text={t('please reload page')}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack gap={'16'} max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack max justify='center'>
                    <Avatar src={data.avatar} />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t('your name')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t('your lastname')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid={'ProfileCard.lastname'}
            />
            <Input
                value={data?.age}
                placeholder={t('your age')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
                data-testid={'ProfileCard.age'}
            />
            <Input
                value={data?.city}
                placeholder={t('city')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
                data-testid={'ProfileCard.city'}
            />
            <Input
                value={data?.username}
                placeholder={t('username')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
                data-testid={'ProfileCard.username'}
            />
            <Input
                value={data?.avatar}
                placeholder={t('avatar')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
                data-testid={'ProfileCard.avatar'}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
                data-testid={'ProfileCard.currency'}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
                data-testid={'ProfileCard.country'}
            />
        </VStack>
    );
};
