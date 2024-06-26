/* eslint-disable i18next/no-literal-string */
import { Menu } from '@headlessui/react';
import { Fragment, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
    const {
        className,
        items,
        trigger,
        direction = 'bottom right',
    } = props;

    const mapDirecionClass: Record<DropdownDirection, string> = {
        'bottom left': cls.optionsBottomLeft,
        'bottom right': cls.optionsBottomRight,
        'top left': cls.optionsTopLeft,
        'top right': cls.optionsTopRight,
    };

    return (
        <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, [mapDirecionClass[direction]])}>
                {items.map((item, index) => {
                    const content = ({ active }: {active:boolean}) => {
                        const buttonMods = {
                            [cls.active]: active,
                            [cls.first]: index === 0,
                            [cls.last]: index === items.length - 1,
                        };
                        return (<button
                            className={classNames(cls.item, buttonMods)}
                            onClick={item.onClick}
                            type='button'
                            disabled={item.disabled}
                        >
                            {item.content}
                        </button>
                        );
                    };
                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} key={index} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled} key={index}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
