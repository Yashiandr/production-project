import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('main');
    const pageIndexes = ['/', '/about'];

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                    to={pageIndexes[0]}>{t('Главная страница')}
                </AppLink>
                <AppLink theme={AppLinkTheme.RED}
                    to={pageIndexes[1]}>{t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
