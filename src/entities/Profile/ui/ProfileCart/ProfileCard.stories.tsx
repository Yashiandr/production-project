import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import defaultAvatar from 'shared/assets/test/storybook.jpg';

import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    args: {
        data: {
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
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};

export const Dark: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const withError: Story = {
    args: {
        error: 'true',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
