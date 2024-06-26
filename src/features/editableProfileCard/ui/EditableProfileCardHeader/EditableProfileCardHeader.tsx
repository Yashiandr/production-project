import { selectUserAuthData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/service/updateProfileData/updateProfileData';
import { selectProfileReadonly } from '../../model/selectors/selectProfileReadonly/selectProfileReadonly';
import { selectProfileData } from '../../model/selectors/selectProfileData/selectProfileData';

interface ProfilePageHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = (props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('profile');

    const authData = useSelector(selectUserAuthData);
    const profileData = useSelector(selectProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(selectProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify='between' className={classNames('', {}, [className])}>
            <Text title={t('profile')} />
            {canEdit && (
                <>
                    {readonly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                                data-testid={'EditableProfileCardHeader.EditButton'}
                            >
                                {t('edit')}
                            </Button>
                        ) : (
                            <HStack gap='8'>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testid={'EditableProfileCardHeader.CancelButton'}
                                >
                                    {t('cancel')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                    data-testid={'EditableProfileCardHeader.SaveButton'}
                                >
                                    {t('save')}
                                </Button>
                            </HStack>
                        )}
                </>
            )}
        </HStack>
    );
};
