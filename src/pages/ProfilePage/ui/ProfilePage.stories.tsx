import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import defaultAvatar from 'shared/assets/test/storybook.jpg';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    args: {},
    decorators: [StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 25,
                country: Country.Russia,
                lastname: 'Andryashin',
                avatar: defaultAvatar,
                first: 'Nikita',
                city: 'stptrsb',
                currency: Currency.EUR,

            },
        },
    })],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
    },
};

export const Dark: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
