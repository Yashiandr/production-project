import { selectUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidabarItemType } from '../../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidabarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(selectUserAuthData);
    if (item.authOnly && !isAuth) {
        return null;
    }
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            {<item.Icon className={cls.icon} />}
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});

SidebarItem.displayName = 'SidebarItem';
