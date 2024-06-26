import {
    isUserAdmin, isUserManager, selectUserAuthData, userActions,
} from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(selectUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLoguot = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;
    console.log(isAdminPanelAvailable);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Yashiandr App')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('create article')}
                </AppLink>
                <Dropdown
                    direction='bottom left'
                    items={[
                        ...(isAdminPanelAvailable ? [{
                            content: t('Admin page'),
                            href: RoutePath.admin_panel,
                        }] : []),
                        {
                            content: t('Profile page'),
                            href: RoutePath.profile + authData.id,
                        },
                        {
                            content: t('exit'),
                            onClick: onLoguot,
                        },
                    ]}
                    trigger={<Avatar size={30} src={authData.avatar} />}
                    className={cls.dropdown}
                />
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('enter')}
            </Button>
            {isAuthModal && (<LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />)}
        </header>
    );
});

Navbar.displayName = 'Navbar';
