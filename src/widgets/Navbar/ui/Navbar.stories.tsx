import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import defaultAvatar from 'shared/assets/test/storybook.jpg';

import { Navbar } from './Navbar';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    decorators: [StoreDecorator({
    })],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const AuthNavBar = {
    decorators: [StoreDecorator({
        user: {
            authData: {
                avatar: 'https://yt3.googleusercontent.com/ytc/APkrFKb0ZHGu5RcBFbHcJAJGvTraDtexH-a4WpsXli96TMo=s900-c-k-c0x00ffffff-no-rj',
            },
        },
    })],
};
