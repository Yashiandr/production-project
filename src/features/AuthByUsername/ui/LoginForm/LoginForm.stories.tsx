import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import LoginForm from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: 'abs' },
    })],
};

export const Dark: Story = {
    args: {
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: { username: '123', password: 'abs' },
        }),
    ],
};

export const withError: Story = {
    args: {

    },
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: 'abs', error: 'ERROR' },
    })],
};

export const Loading: Story = {
    args: {

    },
    decorators: [StoreDecorator({
        loginForm: { isLoading: true },
    })],
};
